import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { JSONSchema } from "../../../interfaces/json-schema";
import { useCosmWasm } from "../../../providers/CosmWasmProvider";
import JsonInteraction from "../../JsonInteraction";

const QueryMessage: React.FC<any> = ({ message, definitions, expandedAll, color, index, isContract }) => {
  const [[name, details]] = Object.entries(message.properties as Record<string, JSONSchema>);
  const { register, handleSubmit, setValue } = useForm();
  const { client } = useCosmWasm();
  const { query } = useRouter();
  const [response, setResponse] = useState<Record<string, string>>();

  const onSubmit = (msg: Record<string, unknown>) => {
    if (!client) return;
    console.log(msg);
    client.queryContractSmart(query.address as string, msg).then(setResponse);
  };

  useEffect(() => {
    setValue(name, {});
  }, []);

  useEffect(() => {
    if (!expandedAll) setResponse(undefined);
  }, [expandedAll]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      key={"query" + name}
      className="flex flex-col gap-4 border border-cw-grey-700 bg-cw-grey-800 rounded-[6px] p-6"
    >
      <JsonInteraction
        index={index + 1}
        buttonMessage="Query"
        register={register}
        name={name}
        isContract={isContract}
        properties={(details.properties as Record<string, JSONSchema>) || {}}
        definitions={definitions as Record<string, JSONSchema>}
        expandedAll={expandedAll}
        color={color}
        response={response}
        bgColor="transparent"
      />
    </form>
  );
};

export default QueryMessage;
