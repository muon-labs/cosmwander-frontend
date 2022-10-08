import clsx from "clsx";
import React, { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { ArrowIcon } from "../Icons";
import { motion, Variants } from "framer-motion";

interface DropdownProps {
  options: {
    name: string;
    style?: string;
    click: () => void;
    img?: string;
    disabled?: boolean;
  }[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const ChainsDropdown: React.FC<PropsWithChildren<DropdownProps>> = ({
  options,
  children,
}) => {
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
          variants={itemVariants}
          className={clsx(
            `p-2 w-full whitespace-nowrap bg-transparent
             hover:cursor-pointer ${el.disabled ? "text-gray-500" : ""}`,
            el.style
          )}
          onClick={el.disabled ? () => {} : click}
        >
          <p className="flex items-center gap-2">
            <img alt={el.name} src={el.img} />
            <span className={`capitalize`}>{el.name}</span>
          </p>
        </motion.div>
      </motion.li>
    );
  });

  return (
    <motion.div
      className="relative w-full"
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
    >
      <motion.button
        className={clsx(`bg-transparent w-[calc(100%-72px)] rounded-[4px]
           hover:bg-white/5 flex items-center justify-between gap-2 p-2
           transition duration-150 ease-in-out h-[62px]`)}
        onClick={() => setOpen(!open)}
      >
        {children}
        <motion.div
          className={clsx(
            "flex items-center transition duration-150 ease-in-out",
            open ? "absolute right-[80px] top-0 bottom-0 m-[auto] z-[51]" : ""
          )}
        >
          <ArrowIcon
            color={clsx(open ? "fill-white" : "fill-cw-grey-600")}
            className={clsx("hover:fill-cw-white ")}
          />
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
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className={clsx(
          `absolute left-0 top-0 w-[calc(100%-72px)] bg-cw-grey-950 z-50 float text-left rounded-[8px]
          m-0 bg-clip-padding border border-cw-grey-700`,
          !open && "hidden"
        )}
      >
        {OptionsItems}
      </motion.ul>
    </motion.div>
  );
};

export default ChainsDropdown;
