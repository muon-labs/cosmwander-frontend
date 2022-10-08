import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  scale?: "lg" | "md";
  icon?: string;
  onclick: () => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "",
      label,
      error,
      scale = "md",
      icon = "search",
      onclick,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full mb-8 relative ">
        {label && (
          <label className={`font-semibold text-xs mb-1`}>{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={clsx(
              "border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-600 rounded-lg outline-none transition duration-150 ease-in-out",
              scale === "lg" && "h-[84px] py-4 px-6 text-lg",
              scale === "md" && "h-[48px] py-2 px-3 text-sm",
              className
            )}
            {...props}
          />
          <button
            onClick={onclick}
            className={clsx(
              "absolute top-0 bottom-0 my-[auto] bg-cw-grey-700 rounded-lg flex items-center justify-center backdrop-opacity-60 hover:backdrop-saturate-150",
              scale === "lg" && "h-[62px] w-[62px] right-[10px]",
              scale === "md" && "h-[36px] w-[37px] right-[6px]"
            )}
          >
            <img
              src={`/icons/${icon}.svg`}
              alt={icon}
              className={clsx(scale === "md" && "w-[16px]")}
            />
          </button>
        </div>
        <p className="text-cw-light-red  text-xs absolute bottom-[-18px] w-full text-center">
          {error && error}
        </p>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
export default SearchInput;
