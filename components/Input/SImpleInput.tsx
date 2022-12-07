import React from "react";
import clsx from "clsx";

const SimpleInput = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(({ className, label, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "border border-cw-grey-700 rounded-[4px] bg-cw-grey-950 text-cw-grey-100  min-w-[326px] outline-none transition duration-150 ease-in-out placeholder:text-cw-grey-300",
        className ? className : "px-3 py-1"
      )}
      {...props}
    />
  );
});

SimpleInput.displayName = "SimpleInput";
export default SimpleInput;
