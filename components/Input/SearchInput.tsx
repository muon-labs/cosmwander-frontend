import React, { FormEvent, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import { SearchIcon } from "../Icons";
import { ChainsDropdown } from "../Dropdown";
import { useClient } from "../../providers/ThemeProvider";
import { Chain } from "../../interfaces/chains";
import { useRouter } from "next/router";
import { BECH32_REGEX } from "../../utils/constants";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  scale?: "lg" | "md";
  icon?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(({ className, scale = "md", icon = "search", ...props }, ref) => {
  const { push: goToPage } = useRouter();
  const { chainColor, changechainColor, changechainColorByPrefix } = useClient();
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isContract = BECH32_REGEX.test(searchValue);
      goToPage(`/${chainColor}/${isContract ? "contract" : "code"}/${searchValue}`);
    },
    [searchValue, goToPage, chainColor]
  );

  const options = useMemo(
    () =>
      Object.values(Chain)
        .map((e) => {
          return {
            name: e,
            click: () => changechainColor(e as Chain),
            style: `hover:bg-chain-${e}-400/30 text-chain-${e}-600`,
            img: `/icons/blockchain/${e}.svg`,
          };
        })
        .sort((chainA) => (chainA.name === chainColor ? -1 : 1)),
    [chainColor, changechainColor]
  );

  const onChangeSearchValue = (value: string) => {
    changechainColorByPrefix(value);
    setSearchValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={clsx("relative w-full", scale === "lg" && "min-w-[58.5rem]", scale === "md" && "min-w-[55.5rem]")}>
        <input
          type="search"
          onChange={({ target }) => onChangeSearchValue(target.value)}
          value={searchValue}
          ref={ref}
          autoComplete="off"
          className={clsx(
            `rounded-[10px] border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-300 bg-transparent w-full outline-none focus:border-chain-${chainColor}-600 focus:shadow-chain-${chainColor}-600/30
          focus:shadow-[0_0_10px_4px] placeholder:text-cw-grey-300 text-cw-grey-200`,
            scale === "lg" && "h-[80px] py-4 px-6 text-md",
            scale === "md" && "h-[60px] py-2 px-3 text-sm",
            className
          )}
          {...props}
        />
        <div
          className={`p-[10px] h-[calc(100%-4px)] absolute right-0 top-0 bottom-0 my-[auto] min-w-[40%] border-l
        border-cw-grey-700 bg-gradient-to-r from-chain-${chainColor}-600/10 flex items-center justify-start
        via-transparent to-transparent z-10`}
        >
          <ChainsDropdown options={options} scale={scale}>
            <p className="flex items-center gap-2">
              <img
                alt={chainColor}
                src={`/icons/blockchain/${chainColor}.svg`}
                className={clsx(scale === "lg" && "h-[45px]", scale === "md" && "h-[36px]")}
              />
              <span className={`capitalize text-chain-${chainColor}-600`}>{chainColor}</span>
            </p>
          </ChainsDropdown>
        </div>
        <div className={`safe-div p-[10px] h-[calc(100%-4px)] absolute right-2 top-0 bottom-0 my-[auto] min-w-[39%] z-0 bg-cw-grey-950`} />
        <button
          disabled={!searchValue}
          className={clsx(
            `absolute top-0 bottom-0 my-[auto] rounded-[4px] flex items-center justify-center pointer z-30
          transition duration-150 ease-in-out disabled:bg-cw-grey-800 bg-chain-${chainColor}-800 border-chain-${chainColor}-400 hover:bg-chain-${chainColor}-400 hover:border-chain-${chainColor}-200 border disabled:border-cw-grey-500 `,
            scale === "lg" && "h-[62px] w-[62px] right-[10px]",
            scale === "md" && "h-[48px] w-[48px] right-[6px]"
          )}
        >
          <SearchIcon color={searchValue ? "fill-white" : "fill-cw-grey-100"} size={scale === "lg" ? 24 : 18} />
        </button>
      </div>
    </form>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
