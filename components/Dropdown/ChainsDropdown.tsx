import clsx from "clsx";
import React, { PropsWithChildren, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { ArrowDown } from "../Icons";
import { motion } from "framer-motion";

interface DropdownProps {
  scale?: "md" | "lg";
  options: {
    name: string;
    style?: string;
    click: () => void;
    img?: string;
    disabled?: boolean;
  }[];
}

const ChainsDropdown: React.FC<PropsWithChildren<DropdownProps>> = ({ options, children, scale = "md" }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => setOpen(false));

  const OptionsItems = options.map((el) => {
    const click = () => {
      el.click();
      setOpen(false);
    };
    return (
      <motion.li key={el.name}>
        <motion.div
          className={clsx(
            `p-2 w-full whitespace-nowrap bg-transparent
             hover:cursor-pointer ${el.disabled ? "text-gray-500" : ""}`,
            el.style
          )}
          onClick={el.disabled ? () => {} : click}
        >
          <p className="flex items-center gap-2">
            <img alt={el.name} src={el.img} className={clsx(scale === "lg" && "h-[45px]", scale === "md" && "h-[36px]")} />
            <span className={`capitalize`}>{el.name}</span>
          </p>
        </motion.div>
      </motion.li>
    );
  });

  return (
    <motion.div className="relative w-full" ref={dropdownRef} animate={open ? "open" : "closed"}>
      <motion.button
        className={clsx(
          `bg-transparent rounded-[4px]
           hover:bg-white/5 flex items-center justify-between gap-2 p-2
           transition duration-150 ease-in-out`,
          scale === "lg" && "h-[62px] w-[calc(100%-72px)]",
          scale === "md" && "h-[48px] w-[calc(100%-50px)]"
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        {children}
        <motion.div
          className={clsx(
            "flex items-center transition duration-150 ease-in-out",
            open ? "absolute top-0 bottom-0 m-[auto] z-[51]" : "",
            scale === "lg" && open && "right-[80px]",
            scale === "md" && open && "right-[58px]"
          )}
        >
          <ArrowDown color={clsx(open ? "fill-white" : "fill-cw-grey-600")} className={clsx("hover:fill-cw-white ")} />
        </motion.div>
      </motion.button>
      <motion.ul
        initial={false}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            },
          },
        }}
        className={clsx(
          `absolute left-0 bg-cw-grey-950 z-50 float text-left rounded-[8px]
          m-0 bg-clip-padding border border-cw-grey-700`,
          !open && "hidden",
          scale === "lg" && "w-[calc(100%-72px)] top-[-1px]",
          scale === "md" && "w-[calc(100%-50px)] top-[-3px]"
        )}
      >
        {OptionsItems}
      </motion.ul>
    </motion.div>
  );
};

export default ChainsDropdown;
