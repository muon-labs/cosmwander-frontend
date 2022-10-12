import React, { useState } from "react";
import { useAsync } from "react-use";
import { CodeDetails } from "../../interfaces/code-details";
import { useClient } from "../../providers/ClientProvider";
import { getCodeSchema } from "../../services/cosmwander";
import { GroupButtons } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Execute from "./Execute";
import Instantiate from "./Instantiate";
import Query from "./Query";

interface Props {
  codeId?: string;
}

const CodeSchema: React.FC<Props> = ({ codeId }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const { chain } = useClient();

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
    instantiate: Record<string, string>;
    execute: Record<string, string>;
    query: Record<string, string>;
  }>();

  useAsync(async () => {
    if (codeId) {
      const { full_schema, partial_schema } = await getCodeSchema(chain, codeId);
      const existFullSchema = full_schema && Object.keys(full_schema).length;
      const schema = existFullSchema ? full_schema : partial_schema;
      setCodeSquema(schema);
    }
  }, [codeId]);

  return (
    <>
      <div className="mt-3 mb-[4rem]">
        <GroupButtons selectedTab={contractTab} handlerTab={setContractTab} tabs={contractTabGroup} />
      </div>
      <TabsContainer
        selectedTab={contractTab}
        options={[
          { key: "instantiate", container: <Instantiate json={codeSquema?.instantiate} /> },
          { key: "query", container: <Query json={codeSquema?.query} /> },
          { key: "execute", container: <Execute json={codeSquema?.execute} /> },
        ]}
      />
    </>
  );
};

export default CodeSchema;