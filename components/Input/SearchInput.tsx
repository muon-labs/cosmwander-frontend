import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { SearchIcon } from "../Icons";
import { ChainsDropdown } from "../Dropdown";
import { useClient } from "../../providers/ClientProvider";
import { Chain } from "../../interfaces/chains";

const CLASSES = {
  osmosis: {
    outline: "outline-chain-osmosis-600 focus:shadow-chain-osmosis-600/30",
    text: "text-chain-osmosis-600",
    from: "from-chain-osmosis-600/10",
    bg: "bg-chain-osmosis-800 border-chain-osmosis-400 hover:bg-chain-osmosis-400 hover:border-chain-osmosis-200",
    style: "hover:bg-chain-osmosis-400/30 text-chain-osmosis-600",
  },
  juno: {
    outline: "outline-chain-juno-600 focus:shadow-chain-juno-600/30",
    text: "text-chain-juno-600",
    from: "from-chain-juno-600/10",
    bg: "bg-chain-juno-800 border-chain-juno-400 hover:bg-chain-juno-400 hover:border-chain-juno-200",
    style: "hover:bg-chain-juno-400/30 text-chain-juno-600",
  },
  stargaze: {
    outline: "outline-chain-stargaze-600 focus:shadow-chain-stargaze-600/30",
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

const SearchInput = React.forwardRef<HTMLInputElement, Props>(({ className = "", scale = "md", icon = "search", onclick, ...props }, ref) => {
  const { chain, changeChain } = useClient();
  const [searchValue, setSearchValue] = useState("");

  const { outline, text, from, bg } = CLASSES[chain as Chain];

  const options = useMemo(
    () =>
      Object.keys(CLASSES)
        .map((e) => {
          return {
            name: e,
            click: () => changeChain(e as Chain),
            style: CLASSES[e as Chain].style,
            img: `/icons/blockchain/${e}.svg`,
          };
        })
        .sort((chainA) => (chainA.name === chain ? -1 : 1)),
    [chain, changeChain]
  );

  return (
    <div className={clsx("relative w-full", scale === "lg" && "min-w-[58.5rem]", scale === "md" && "min-w-[55.5rem]")}>
      <input
        onChange={({ target }) => setSearchValue(target.value)}
        value={searchValue}
        ref={ref}
        className={clsx(
          `rounded-[10px] border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-600 bg-transparent w-full ${outline}
              focus:shadow-[0_0_4px_4px] placeholder:text-cw-grey-600 text-cw-grey-200`,
          scale === "lg" && "h-[80px] py-4 px-6 text-md",
          scale === "md" && "h-[60px] py-2 px-3 text-sm",
          className
        )}
        {...props}
      />
      <div
        className={`p-[10px] h-[calc(100%-4px)] absolute right-0 top-0 bottom-0 my-[auto] min-w-[40%] border-l
            border-cw-grey-700 bg-gradient-to-r ${from} flex items-center justify-start
            via-transparent to-transparent`}
      >
        <ChainsDropdown options={options} scale={scale}>
          <p className="flex items-center gap-2">
            <img
              alt={chain}
              src={`/icons/blockchain/${chain}.svg`}
              className={clsx(scale === "lg" && "h-[45px]", scale === "md" && "h-[36px]")}
            />
            <span className={`capitalize ${text}`}>{chain}</span>
          </p>
        </ChainsDropdown>
      </div>
      <button
        disabled={!searchValue}
        onClick={onclick}
        className={clsx(
          `absolute top-0 bottom-0 my-[auto] rounded-[4px] flex items-center justify-center
              transition duration-150 ease-in-out
              disabled:bg-cw-grey-800 ${bg} border disabled:border-cw-grey-500 `,
          scale === "lg" && "h-[62px] w-[62px] right-[10px]",
          scale === "md" && "h-[48px] w-[48px] right-[6px]"
        )}
      >
        <SearchIcon color={searchValue ? "fill-white" : "fill-cw-grey-100"} size={scale === "lg" ? 24 : 18} />
      </button>
    </div>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
