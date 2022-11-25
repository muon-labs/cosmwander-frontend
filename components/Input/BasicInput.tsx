import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  scale?: "lg" | "md";
}

const BasicInput = React.forwardRef<HTMLInputElement, Props>(({ className, label, error, scale = "md", ...props }, ref) => {
  return (
    <div className="flex flex-col w-full mb-8 relative ">
      <label className={`font-semibold text-xs mb-1 `}>{label && label}</label>
      <input
        ref={ref}
        className={clsx(
          "border border-cw-grey-700 bg-cw-grey-950 text-cw-grey-300 rounded-lg outline-none transition duration-150 ease-in-out",
          scale === "lg" && "h-[84px] py-4 px-6 text-lg",
          scale === "md" && "h-[48px] py-2 px-3 text-sm"
        )}
        {...props}
      />
      <p className="text-cw-light-red  text-xs absolute bottom-[-18px] w-full text-center">{error && error}</p>
    </div>
  );
});

BasicInput.displayName = "BasicInput";
export default BasicInput;
