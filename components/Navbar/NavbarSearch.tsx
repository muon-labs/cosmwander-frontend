import clsx from "clsx";
import React from "react";
import { useClient } from "../../providers/ClientProvider";
import { motion } from "framer-motion";
import CosmwanderLogo from "../Icons/ComswanderLogo";
import { SearchInput } from "../Input";

const CLASSES = {
  osmosis: {
    textFill: "fill-chain-osmosis-600",
    iconFill: "fill-chain-osmosis-600",
  },
  juno: {
    textFill: "fill-chain-juno-400",
    iconFill: "fill-chain-juno-600",
  },
  stargaze: {
    textFill: "fill-chain-stargaze-400",
    iconFill: "fill-chain-stargaze-400",
  },
};

const NavbarSearch: React.FC = () => {
  const { chain } = useClient();

  return (
    <motion.nav className="min-h-[4.5rem] p-4 relative flex items-center justify-between">
      <motion.div className="max-w-[1425px] w-full mx-[auto] my-0 flex items-center justify-between py-4">
        <motion.div
          key={chain}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                ease: "easeInOut",
                duration: 0.5,
              },
            },
          }}
        >
          <CosmwanderLogo
            iconFill={CLASSES[chain].iconFill}
            textFill={CLASSES[chain].textFill}
          />
        </motion.div>
        <div>
          <SearchInput
            placeholder="Enter interchain smart contract address or code id"
            scale="md"
            onclick={() => {
              console.log("search!");
            }}
          />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavbarSearch;
