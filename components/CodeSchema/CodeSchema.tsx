import React, { useMemo, useState } from "react";
import { CodeDetails } from "../../interfaces/code-details";
import { JSONSchema } from "../../interfaces/json-schema";
import { useTheme } from "../../providers/ThemeProvider";
import { useWallet } from "../../providers/WalletProvider";
import { IntlAddress } from "../../utils/intl";
import { GroupButtons, OutlineButton, SimpleButton } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Execute from "./Execute";
import Instantiate from "./Instantiate";
import { ExecuteMsgBuilder, InstantiateMsgBuilder, QueryMsgBuilder } from "./MsgBuilder";
import Query from "./Query";

interface Props {
  codeDetails?: CodeDetails;
  color?: string;
  contractAddr?: string;
  skeleton?: boolean;
  init_msg?: JSONSchema;
}

const CodeSchema: React.FC<Props> = ({ contractAddr, init_msg, codeDetails, color, skeleton }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const { chainColor } = useTheme();
  const { connectWallet, address, disconnectWallet } = useWallet();
  const pageColor = color ? color : chainColor;

  const hasSchema = useMemo(() => !!codeDetails?.full_schema?.instantiate, [codeDetails]);

  const contractTabGroup = getTabsOptions();

  const options = hasSchema
    ? getTabsOptionsWithSchema(codeDetails, contractAddr, pageColor, init_msg)
    : getTabsOptionsWithoutSchema(codeDetails?.code_id || 0, contractAddr);

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
      <TabsContainer skeleton={skeleton} selectedTab={contractTab} options={options} />
    </>
  );
};

export default CodeSchema;

const getTabsOptions = () => {
  return [
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
};

const getTabsOptionsWithSchema = (
  codeDetails: CodeDetails | undefined,
  contractAddr: string | undefined,
  color: string,
  init_msg?: JSONSchema
) => {
  if (!codeDetails?.full_schema) return [];
  return [
    {
      key: "instantiate",
      container: <Instantiate isContract={!!contractAddr} color={color} json={init_msg || codeDetails.full_schema.instantiate} />,
    },
    { key: "query", container: <Query isContract={!!contractAddr} color={color} json={codeDetails.full_schema.query} /> },
    { key: "execute", container: <Execute isContract={!!contractAddr} color={color} json={codeDetails.full_schema.execute} /> },
  ];
};

const getTabsOptionsWithoutSchema = (codeId: number, contractAddr: string | undefined) => {
  const instantiateOption = [{ key: "instantiate", container: <InstantiateMsgBuilder codeId={codeId} /> }];
  if (!contractAddr) return instantiateOption;

  return [
    ...instantiateOption,
    { key: "query", container: <QueryMsgBuilder contractAddress={contractAddr} /> },
    { key: "execute", container: <ExecuteMsgBuilder contractAddress={contractAddr} /> },
  ];
};
