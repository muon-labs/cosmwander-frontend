import React from "react";
import { MinusIcon, PlusIcon } from "../../Icons";

interface Props {
  color: string;
  setExpanded: (expanded: boolean) => void;
}

const Expand: React.FC<Props> = ({ color, setExpanded }) => {
  return (
    <div className="w-full mb-[20px] flex gap-[10px] items-center justify-end">
      <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
        <PlusIcon color={`fill-chain-${color}-600`} />
        <p className="text-sm" onClick={() => setExpanded(true)}>
          Expand all
        </p>
      </button>
      <button className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500">
        <MinusIcon color={`fill-chain-${color}-600`} />
        <p className="text-sm" onClick={() => setExpanded(false)}>
          Reset
        </p>
      </button>
    </div>
  );
};

export default Expand;
