import React, { useMemo, useState } from "react";
import { CodeDetails } from "../../interfaces/code-details";
import { JSONSchema } from "../../interfaces/json-schema";
import { IntlAddress } from "../../utils/intl";
import { GroupButtons, OutlineButton, SimpleButton } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Execute from "./Execute";
import Instantiate from "./Instantiate";
import { ExecuteMsgBuilder, InstantiateMsgBuilder, QueryMsgBuilder } from "./MsgBuilder";
import Query from "./Query";
import clsx from "clsx";
import UploadIcon from "../Icons/Upload";
import { useCosmos } from "~/providers/CosmosProvider";

interface Props {
  codeDetails?: CodeDetails;
  contractAddr?: string;
  skeleton?: boolean;
  init_msg?: JSONSchema;
}

const CodeSchema: React.FC<Props> = ({ contractAddr, init_msg, codeDetails, skeleton }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const { connect, address, disconnect } = useCosmos();
  const [schema, setSchema] = useState<JSONSchema | null>(codeDetails?.full_schema as JSONSchema);

  const hasSchema = useMemo(() => !!schema?.instantiate, [schema]);

  const onSchemaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (!e.target.files) return;
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => setSchema(JSON.parse(e.target?.result as string));
  };

  const contractTabGroup = getTabsOptions();

  const options = hasSchema
    ? getTabsOptionsWithSchema(schema, contractAddr, init_msg)
    : getTabsOptionsWithoutSchema(codeDetails?.code_id || 0, contractAddr);

  return (
    <>
      <div className="mt-3 mb-[3rem] flex items-center justify-between">
        <GroupButtons selectedTab={contractTab} handlerTab={setContractTab} tabs={contractTabGroup} skeleton={skeleton} />
        <div className="flex gap-2">
          {hasSchema ? null : (
            <>
              <input
                id="upload-schema"
                type="file"
                accept="application/JSON"
                placeholder="Upload schema"
                onChange={onSchemaUpload}
                className="h-0 w-0 overflow-hidden"
              />
              <label
                htmlFor="upload-schema"
                className={clsx(
                  `bg-chain-800 py-2 px-4 rounded-[4px] group cursor-pointer hover:bg-chain-400 border border-chain-400 hover:border-chain-200 transition-all relative overflow-hidden`
                )}
              >
                <span
                  className={clsx(
                    `bg-chain-400 w-full absolute h-full left-0 rounded-[4px] flex items-center justify-center top-[-4rem] group-hover:top-0 transition-all`
                  )}
                >
                  <UploadIcon className="w-6 h-6  " />
                </span>
                Upload schema
              </label>
            </>
          )}
        </div>
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

const getTabsOptionsWithSchema = (schema: JSONSchema | null, contractAddr: string | undefined, init_msg?: JSONSchema) => {
  if (!schema) return [];
  return [
    {
      key: "instantiate",
      container: <Instantiate isContract={!!contractAddr} json={init_msg || (schema.instantiate as JSONSchema)} />,
    },
    { key: "query", container: <Query isContract={!!contractAddr} json={schema.query as JSONSchema} /> },
    { key: "execute", container: <Execute isContract={!!contractAddr} json={schema.execute as JSONSchema} /> },
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
