import clsx from "clsx";
import React from "react";
import { useClient } from "../../providers/ClientProvider";
import { motion } from "framer-motion";
import CosmwanderLogo from "../Icons/ComswanderLogo";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const { chain } = useClient();
  const { push: goToPage } = useRouter();

  return (
    <motion.nav className="min-h-[4.5rem] p-4 relative flex items-center justify-between">
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
        className={clsx(
          "absolute bg-gradient-radial via-transparent to-transparent top-[-50%] w-full h-[100%] blur-2xl",
          `from-chain-${chain}-600/50`
        )}
      ></motion.div>
      <motion.div className="max-w-[1425px] w-full mx-[auto] my-0 flex items-center justify-between py-4">
        <motion.div
          key={chain}
          className="cursor-pointer"
          onClick={() => goToPage("/")}
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
          <CosmwanderLogo iconFill={`fill-chain-${chain}-600`} textFill={`fill-chain-${chain}-400`} />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
