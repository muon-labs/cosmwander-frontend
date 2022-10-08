import React, { useState } from "react";
import clsx from "clsx";
import { ArrowIcon, SearchIcon } from "../Icons";
import { ChainsDropdown } from "../Dropdown";

const CLASSES = {
  osmosis: {
    outline: "outline-chain-osmosis-600",
    text: "text-chain-osmosis-600",
    from: "from-chain-osmosis-600/10",
    bg: "bg-chain-osmosis-800 border-chain-osmosis-400 hover:bg-chain-osmosis-400 hover:border-chain-osmosis-200",
    style: "hover:bg-chain-osmosis-400/30 text-chain-osmosis-600",
  },
  juno: {
    outline: "outline-chain-juno-600",
    text: "text-chain-juno-600",
    from: "from-chain-juno-600/10",
    bg: "bg-chain-juno-800 border-chain-juno-400 hover:bg-chain-juno-400 hover:border-chain-juno-200",
    style: "hover:bg-chain-juno-400/30 text-chain-juno-600",
  },
  stargaze: {
    outline: "outline-chain-stargaze-600",
    text: "text-chain-stargaze-600",
    from: "from-chain-stargaze-600/10",
    bg: "bg-chain-stargaze-800 border-chain-stargaze-400 hover:bg-chain-stargaze-400 hover:border-chain-stargaze-200",
    style: "hover:bg-chain-stargaze-400/30 text-chain-stargaze-600",
  },
};

interface Props extends React.HTMLProps<HTMLInputElement> {
  scale?: "lg" | "md";
  icon?: string;
  onclick: () => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { className = "", scale = "md", icon = "search", onclick, ...props },
    ref
  ) => {
    const [selectedChain, setSelectedChain] = useState("osmosis");
    const [searchValue, setSearchValue] = useState("");

    const { outline, text, from, bg, style } =
      CLASSES[selectedChain as keyof typeof CLASSES];

    const options = Object.keys(CLASSES).map((e) => {
      return {
        name: e,
        click: () => setSelectedChain(e),
        style: CLASSES[e as keyof typeof CLASSES].style,
        img: `/icons/blockchain/${e}.svg`,
      };
    });

    return (
      <div className="flex flex-col w-full mb-8 relative">
        <div className="relative">
          <input
            onChange={({ target }) => setSearchValue(target.value)}
            value={searchValue}
            ref={ref}
            className={clsx(
              `rounded-lg border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-600 bg-transparent w-full ${outline}
              focus:shadow-chain-osmosis-600/30 focus:shadow-md`,
              scale === "lg" && "h-[80px] py-4 px-6 text-md",
              scale === "md" && "h-[48px] py-2 px-3 text-sm",
              className
            )}
            {...props}
          />
          <div
            className={`p-[10px] h-[calc(100%-4px)] absolute right-0 top-0 bottom-0 my-[auto] min-w-[40%] border-l
            border-cw-grey-700 bg-gradient-to-r ${from}
            via-transparent to-transparent`}
          >
            <ChainsDropdown options={options}>
              <p className="flex items-center gap-2">
                <img
                  alt={selectedChain}
                  src={`/icons/blockchain/${selectedChain}.svg`}
                />
                <span className={`capitalize ${text}`}>{selectedChain}</span>
              </p>
            </ChainsDropdown>
          </div>
          <button
            disabled={!searchValue}
            onClick={onclick}
            className={clsx(
              `absolute top-0 bottom-0 my-[auto] rounded-lg flex items-center justify-center
              transition duration-150 ease-in-out
              disabled:bg-cw-grey-800 ${bg} border disabled:border-cw-grey-500 `,
              scale === "lg" && "h-[62px] w-[62px] right-[10px]",
              scale === "md" && "h-[36px] w-[37px] right-[6px]"
            )}
          >
            <SearchIcon
              color={searchValue ? "fill-white" : "fill-cw-grey-100"}
            />
          </button>
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
export default SearchInput;
