import React, { useState } from "react";
import { useAsync } from "react-use";
import { Chain } from "../../interfaces/chains";
import { JSONSchema } from "../../interfaces/json-schema";
import { useClient } from "../../providers/ThemeProvider";
import { useWallet } from "../../providers/WalletProvider";
import { getCodeSchema } from "../../services/cosmwander";
import { IntlAddress } from "../../utils/intl";
import { GroupButtons, OutlineButton, SimpleButton } from "../Buttons";
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
  const { connectWallet, address, disconnectWallet } = useWallet();
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
      <div className="mt-3 mb-[4rem] flex items-center justify-between">
        <GroupButtons selectedTab={contractTab} color={pageColor} handlerTab={setContractTab} tabs={contractTabGroup} skeleton={skeleton} />
        {address ? (
          <div className="flex flex-col gap-2">
            <div>{IntlAddress(address)}</div>
            <OutlineButton className="text-xs px-2 py-1" onClick={disconnectWallet}>
              Disconnect
            </OutlineButton>
          </div>
        ) : (
          <SimpleButton className="py-2 px-9" onClick={connectWallet}>
            Connect Wallet
          </SimpleButton>
        )}
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
