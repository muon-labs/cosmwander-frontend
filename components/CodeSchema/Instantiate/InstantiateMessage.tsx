import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { JSONSchema } from "../../../interfaces/json-schema";
import JsonInteraction from "../../JsonInteraction";

const InstantiateMessage: React.FC<any> = ({ message, definitions, expandedAll, color, index, isContract }) => {
  const [[name, details]] = Object.entries(message.properties as Record<string, JSONSchema>);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: Record<string, unknown>) => {
    console.log(data);
  };

  useEffect(() => {
    setValue(name, {});
  }, []);

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
        buttonMessage="Instantiate"
        isContract={isContract}
        properties={(details.properties as Record<string, JSONSchema>) || {}}
        definitions={definitions as Record<string, JSONSchema>}
        expandedAll={expandedAll}
        color={color}
        bgColor="transparent"
      />
    </form>
  );
};

export default InstantiateMessage;
