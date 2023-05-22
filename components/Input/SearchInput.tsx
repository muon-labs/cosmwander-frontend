import React, { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { SearchIcon } from "../Icons";
import { useCosmos } from "~/providers/CosmosProvider";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  scale?: "lg" | "md";
  icon?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(({ className, scale = "md", icon = "search", ...props }, ref) => {
  const { push: goToPage } = useRouter();
  const { chainName } = useCosmos();
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isCodeId = /^\d/.test(searchValue);
      goToPage(`/${chainName}/${isCodeId ? "code" : "contract"}/${searchValue}`);
    },
    [searchValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className={clsx("relative w-full", scale === "lg" && "min-w-[58.5rem]", scale === "md" && "min-w-[55.5rem]")}>
        <input
          type="search"
          onChange={({ target }) => setSearchValue(target.value)}
          value={searchValue}
          ref={ref}
          autoComplete="off"
          className={clsx(
            "rounded-[10px] border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-300 bg-transparent w-full outline-none focus:border-chain-600 focus:shadow-chain-600 focus:shadow-[0_0_10px_4px] placeholder:text-cw-grey-300",
            scale === "lg" && "h-[80px] py-4 px-6 text-md",
            scale === "md" && "h-[60px] py-2 px-3 text-sm",
            className
          )}
          {...props}
        />
        <button
          disabled={!searchValue}
          className={clsx(
            `absolute top-0 bottom-0 my-[auto] rounded-[4px] flex items-center justify-center pointer z-30
          transition duration-150 ease-in-out disabled:bg-cw-grey-800 bg-chain-800 border-chain-400 hover:bg-chain-400 hover:border-chain-200 border disabled:border-cw-grey-500 `,
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
