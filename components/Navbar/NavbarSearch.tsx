import React from "react";
import { useClient } from "../../providers/ThemeProvider";
import { motion } from "framer-motion";
import CosmwanderLogo from "../Icons/ComswanderLogo";
import { SearchInput } from "../Input";
import { useRouter } from "next/router";

const NavbarSearch: React.FC = () => {
  const { chainColor } = useClient();
  const { push: goToPage } = useRouter();

  return (
    <motion.nav className="min-h-[4.5rem] p-4 relative flex items-center justify-between">
      <motion.div className="max-w-[1425px] w-full mx-[auto] my-0 flex items-center justify-between py-4">
        <motion.div
          onClick={() => goToPage("/")}
          key={chainColor}
          className="cursor-pointer"
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
          <CosmwanderLogo iconFill={`fill-chain-${chainColor}-400`} textFill={`fill-chain-${chainColor}-600`} />
        </motion.div>
        <div>
          <SearchInput placeholder="Enter interchain smart contract address or code id" scale="md" />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavbarSearch;
