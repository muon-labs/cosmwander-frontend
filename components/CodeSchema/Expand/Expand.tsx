import React from "react";
import { MinusIcon, PlusIcon } from "../../Icons";

interface Props {
  expanded: boolean | null;
  setExpanded: (expanded: boolean | null) => void;
}

const Expand: React.FC<Props> = ({ setExpanded, expanded }) => {
  return (
    <div className="w-full mb-[20px] flex gap-[10px] items-center justify-end">
      <button
        className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500"
        onClick={() => setExpanded(true)}
      >
        <PlusIcon color={`fill-chain-600`} />
        <p className="text-sm">Expand all</p>
      </button>
      <button
        className="rounded-[4px] border border-cw-grey-600 bg-cw-grey-750 py-1 px-3 flex gap-2 items-center justify-center hover:bg-cw-grey-500"
        onClick={() => setExpanded(expanded === false ? null : false)}
      >
        <MinusIcon color={`fill-chain-600`} />
        <p className="text-sm">Reset</p>
      </button>
    </div>
  );
};

export default Expand;
