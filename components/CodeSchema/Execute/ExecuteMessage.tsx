import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { JSONSchema } from "../../../interfaces/json-schema";
import JsonInteraction from "../../JsonInteraction";
import { useCosmos } from "~/providers/CosmosProvider";

const ExecuteMessage: React.FC<any> = ({ message, definitions, expandedAll, color, index, isContract }) => {
  const [[name, details]] = Object.entries(message.properties as Record<string, JSONSchema>);
  const { register, handleSubmit, setValue } = useForm();
  const { address, cwClient } = useCosmos();
  const { query } = useRouter();
  const [response, setResponse] = useState<any>();

  const onSubmit = (msg: Record<string, unknown>) => {
    if (!cwClient) return;
    console.log(msg);
    cwClient.execute(address as string, query.address as string, msg, "auto").then(setResponse);
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
        register={register}
        name={name}
        buttonMessage="Execute"
        isContract={isContract}
        response={response}
        properties={(details.properties as Record<string, JSONSchema>) || {}}
        definitions={definitions as Record<string, JSONSchema>}
        expandedAll={expandedAll}
        color={color}
        bgColor="transparent"
      />
    </form>
  );
};

export default ExecuteMessage;
