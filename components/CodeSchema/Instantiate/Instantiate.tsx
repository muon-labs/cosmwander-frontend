import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { JSONSchema } from "../../../interfaces/json-schema";
import Expand from "../Expand/Expand";
import InstantiateMessage from "./InstantiateMessage";
import { useForm } from "react-hook-form";
import JsonInteraction from "../../JsonInteraction";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  json: JSONSchema;
  color: string;
  isContract: boolean;
}

const Instantiate: React.FC<Props> = ({ json, isContract, color }) => {
  const { definitions } = json as any;
  const [expanded, setExpanded] = React.useState<boolean | null>(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ Instantiate: data }: Record<string, unknown>) => {
    console.log(data);
  };

  return (
    <div className="mt-2 grid grid-cols-1 gap-8 ">
      {isContract ? (
        <ReactJson src={json || {}} indentWidth={2} theme="ashes" />
      ) : (
        <>
          <Expand color={color} expanded={expanded} setExpanded={setExpanded} />
          <div className="w-full flex flex-col gap-[20px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border border-cw-grey-700 bg-cw-grey-800 rounded-[6px] p-6">
              <JsonInteraction
                index={1}
                register={register}
                name="Instantiate"
                buttonMessage="Instantiate"
                isContract={true}
                properties={(json.properties as Record<string, JSONSchema>) || {}}
                definitions={definitions as Record<string, JSONSchema>}
                expandedAll={expanded as boolean}
                color={color}
                bgColor="transparent"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Instantiate;
