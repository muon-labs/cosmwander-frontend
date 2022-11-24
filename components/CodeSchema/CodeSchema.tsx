import React, { useState } from "react";
import { useAsync } from "react-use";
import { Chain } from "../../interfaces/chains";
import { JSONSchema } from "../../interfaces/json-schema";
import { useClient } from "../../providers/ThemeProvider";
import { getCodeSchema } from "../../services/cosmwander";
import { GroupButtons } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Execute from "./Execute";
import Instantiate from "./Instantiate";
import Query from "./Query";

interface Props {
  codeId?: string;
  color?: Chain;
  isContract: boolean;
  skeleton?: boolean;
}

const CodeSchema: React.FC<Props> = ({ isContract, codeId, color, skeleton }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const { chainColor } = useClient();
  const pageColor = color ? color : chainColor;

  const contractTabGroup = [
    {
      content: "Instantiate",
      key: "instantiate",
    },
    {
      content: "Query",
      key: "query",
    },
    {
      content: "Execute",
      key: "execute",
    },
  ];

  const [codeSquema, setCodeSquema] = useState<{
    instantiate: JSONSchema;
    execute: JSONSchema;
    query: JSONSchema;
  }>({ instantiate: {}, execute: {}, query: {} });

  useAsync(async () => {
    if (codeId) {
      const { full_schema, partial_schema } = await getCodeSchema(chainColor, codeId);
      const existFullSchema = full_schema && Object.keys(full_schema).length;
      const schema = existFullSchema ? full_schema : partial_schema;
      setCodeSquema(schema);
    }
  }, [codeId]);

  return (
    <>
      <div className="mt-3 mb-[4rem]">
        <GroupButtons selectedTab={contractTab} color={pageColor} handlerTab={setContractTab} tabs={contractTabGroup} skeleton={skeleton} />
      </div>
      <TabsContainer
        skeleton={skeleton}
        selectedTab={contractTab}
        options={[
          { key: "instantiate", container: <Instantiate isContract={isContract} color={pageColor} json={codeSquema.instantiate} /> },
          { key: "query", container: <Query isContract={isContract} color={pageColor} json={codeSquema.query} /> },
          { key: "execute", container: <Execute isContract={isContract} color={pageColor} json={codeSquema.execute} /> },
        ]}
      />
    </>
  );
};

export default CodeSchema;
