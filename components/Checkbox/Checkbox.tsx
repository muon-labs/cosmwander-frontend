import clsx from "clsx";
import React, { InputHTMLAttributes, useState } from "react";

interface ICheckBox {
  labelLeft?: string;
  labelRight?: string;
  name: string;
}

const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement> & ICheckBox> = ({
  labelLeft,
  labelRight,
  name,
  checked: defaultValue,
  onChange,
  className,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(defaultValue as boolean);

  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <div className={clsx("form-check flex items-center gap-2", className)}>
      {labelLeft && (
        <label className="form-check-label inline-block text-cw-grey-400" htmlFor={`checkBox-${name}`}>
          {labelLeft}
        </label>
      )}
      <div className="relative">
        <input
          className={clsx(
            "form-checkBox-input appearance-none h-[30px] w-[30px] rounded-sm bg-cw-grey-950 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
            `border border-chain-400 text-chain-400`
          )}
          {...props}
          type="checkbox"
          checked={checked}
          onChange={changeChecked}
          id={`checkBox-${name}`}
        />
        <label htmlFor={`checkBox-${name}`} className="checkbox-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              className={`stroke-chain-200`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 10l3 3 6-6"
            ></path>
          </svg>
        </label>
      </div>
      {labelRight && (
        <label className="form-check-label inline-block text-cw-grey-400" htmlFor={`checkBox-${name}`}>
          {labelRight}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
