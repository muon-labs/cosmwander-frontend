import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import CosmwanderLogo from "../Icons/ComswanderLogo";
import { useRouter } from "next/router";
import { SearchInput } from "../Input";
import { useCosmos } from "~/providers/CosmosProvider";
import { OutlineButton, SimpleButton } from "../Buttons";
import { IntlAddress } from "~/utils/intl";

interface Props {
  showSearchBar?: boolean;
}

const Navbar: React.FC<Props> = ({ showSearchBar }) => {
  const { push: goToPage } = useRouter();
  const { address, disconnect, connect } = useCosmos();

  return (
    <motion.nav className="min-h-[4.5rem] p-4 relative flex items-center justify-between">
      <motion.div
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
        className={clsx("absolute bg-gradient-radial to-50% to-transparent top-[-50%] w-full h-[100%] blur-2xl from-chain-600")}
      ></motion.div>
      <motion.div className="max-w-[1425px] w-full mx-[auto] my-0 flex items-center justify-between py-4">
        <motion.div
          className="cursor-pointer flex justify-between w-full"
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
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-4">
              <div className="loader w-[4rem] h-[4rem]">
                <span className="before:bg-chain-600 border-t-2 border-t-chain-600"></span>
              </div>
              <CosmwanderLogo textFill={`fill-chain-600`} />
            </div>

            {showSearchBar ? <SearchInput placeholder="Enter interchain smart contract address or code id" scale="md" /> : null}
            {address ? (
              <div className="flex flex-col gap-2">
                <div>{IntlAddress(address)}</div>
                <OutlineButton className="text-xs px-2 py-1" onClick={disconnect}>
                  Disconnect
                </OutlineButton>
              </div>
            ) : (
              <SimpleButton className="py-2 px-9" onClick={connect}>
                Connect Wallet
              </SimpleButton>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
