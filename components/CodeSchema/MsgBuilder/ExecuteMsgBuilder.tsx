import React, { FormEvent, useState } from "react";
import clsx from "clsx";
import { SimpleButton } from "../../Buttons";
import Editor from "@monaco-editor/react";
import dynamic from "next/dynamic";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { useCosmos } from "~/providers/CosmosProvider";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  contractAddress: string;
}

const InstantiateMsgBuilder: React.FC<Props> = ({ contractAddress }) => {
  const [code, setCode] = React.useState<string>();
  const [response, setResponse] = useState<{ value: ExecuteResult }>();
  const { address, cwClient } = useCosmos();

  const onSubmit = async (e: FormEvent) => {
    if (!address || !code?.length) return;
    e.preventDefault();
    const value = await cwClient.execute(address, contractAddress, JSON.parse(code), "auto");
    setResponse({ value });
  };

  return (
    <form
      className={clsx("rounded-[6px] flex flex-col gap-2", "dark", "bg-cw-grey-850 border border-cw-grey-700 p-6 mt-[20px]")}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col mb-4">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-xs bg-cw-grey-300 text-cw-grey-850 rounded-[3px] flex items-center justify-center min-w-[22px] min-h-[22px]">
              1
            </span>
            <p>Execute</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Editor language="json" height={300} theme="vs-dark" onChange={setCode} />
        <SimpleButton disabled={!address} className="w-fit self-end py-2 px-9 my-4">
          execute
        </SimpleButton>
        <div>{response && <ReactJson src={response || {}} indentWidth={2} theme="ashes" />}</div>
      </div>
    </form>
  );
};

export default InstantiateMsgBuilder;
