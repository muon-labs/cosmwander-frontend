import clsx from "clsx";
import React from "react";
import { Chain } from "../../interfaces/chains";
import { ArrowRight, MinusIcon, PlusIcon } from "../Icons";
import { BasicInput } from "../Input";
import SimpleInput from "../Input/SImpleInput";

interface Props {
  json: Record<string, unknown>;
  color: Chain;
}

const JsonInteraction: React.FC<Props> = ({ json, color }) => {
  console.log(json);

  const firstDeepDiv = Object.keys(json).map((e, i) => {
    const isExpanded = true;
    const fakeObjectToStyle = { include_expired: false, token_id: "fewf" };
    return (
      <div key={`firstDeepDiv-${e}`} className="rounded-[6px] bg-cw-grey-800 border border-cw-grey-700 p-6 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-xs bg-cw-grey-300 text-cw-grey-850 rounded-[3px] flex items-center justify-center min-w-[22px] min-h-[22px]">
              {i + 1}
            </span>
            {e} ({typeof json[e]})
          </div>
          {typeof json[e] !== "object" ? (
            <SimpleInput placeholder={`${e}${" "}(${json[e]})`} />
          ) : (
            <div className="min-w-[40px] min-h-[40px] flex items-center justify-center border border-cw-grey-600 rounded-[6px] bg-[#1B1B1B]">
              <ArrowRight
                color={`fill-chain-${color}-600`}
                className={clsx("transition duration-75 ease-in-out", isExpanded ? "rotate-[90deg]" : "")}
              />
            </div>
          )}
        </div>
        {typeof json[e] === "object" && (
          <div className="p-[20px] border border-cw-grey-700 bg-[#1B1B1B] rounded-[6px] flex flex-col">
            {/* {Object.keys(json[e] as Record<string, unknown>).map(() => {})} */}
            {Object.keys(fakeObjectToStyle).map((e, i) => {
              return (
                <>
                  <div
                    className={clsx(
                      "flex justify-between items-center",
                      i === Object.keys(fakeObjectToStyle).length - 1 ? "" : "border-b border-cw-grey-600 pb-[20px] mb-[20px]"
                    )}
                  >
                    <p>
                      {e} ({typeof json[e]})
                    </p>
                    <SimpleInput placeholder={`${e}${" "}(${json[e]})`} />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <div className="w-full mb-[20px] flex gap-[10px] items-center justify-end">
        <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
          <PlusIcon color={`fill-chain-${color}-600`} />
          <p className="text-sm">Expand all</p>
        </button>
        <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
          <MinusIcon color={`fill-chain-${color}-600`} />
          <p className="text-sm">Reset</p>
        </button>
      </div>
      <div className="w-full flex flex-col gap-[40px]">{firstDeepDiv}</div>
    </div>
  );
};

export default JsonInteraction;
