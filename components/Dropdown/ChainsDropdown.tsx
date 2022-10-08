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
            `py-2 px-4 w-full whitespace-nowrap bg-transparent
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
      className="relative"
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
    >
      <motion.button
        className={clsx(`bg-transparent w-[calc(100%-72px)] rounded-lg
           hover:bg-white/5 flex items-center justify-between gap-2 p-2
           transition duration-150 ease-in-out`)}
        onClick={() => setOpen(!open)}
      >
        {children}
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
          `absolute left-0 top-0 w-[calc(100%-72px)] bg-cw-grey-950 z-50 float text-left rounded-lg
          m-0 bg-clip-padding border border-cw-grey-700`,
          !open && "hidden"
        )}
      >
        {OptionsItems}
      </motion.ul>
      <motion.div
        variants={{
          open: { rotate: 180 },
          closed: { rotate: 0 },
        }}
        transition={{ duration: 0.1 }}
        className={clsx(
          "absolute right-[87px] top-0 bottom-0 m-[auto] flex items-center transition duration-150 ease-in-out"
        )}
      >
        <ArrowIcon
          color={clsx(open ? "fill-white" : "fill-cw-grey-600")}
          className={clsx("hover:fill-cw-white ")}
        />
      </motion.div>
    </motion.div>
  );
};

export default ChainsDropdown;
