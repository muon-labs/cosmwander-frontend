import Head from "next/head";
import Image from "next/image";

import { useQuery } from "react-query";
import { useCosmos } from "~/providers/CosmosProvider";

import ContractCard from "~/components/ContractCard/ContractCard";
import { SearchInput } from "~/components/Input";

import FlameIcon from "~/public/icons/flame.svg";
import ClockIcon from "~/public/icons/clock.svg";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { chainName, queryService } = useCosmos();
  const { data: contracts } = useQuery(["latest_contracts", chainName], () => queryService.getLatestContracts(chainName), {
    cacheTime: 1000 * 60,
  });

  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col gap-[40px] py-11 items-center">
          <h1 className="text-2xl">Explore CosmWasm Smart Contacts</h1>
          <SearchInput placeholder="Search by smart contract address or code id" scale="lg" />
        </div>
        <div className="py-6 grid grid-cols-2 gap-9 w-full border-t border-cw-grey-700">
          <h2 className="flex items-center gap-3 justify-start text-lg col-span-2">
            <Image src={ClockIcon} alt="Clock icon" className="h-[25px]" />
            Latest smart contracts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-4">
            {contracts?.slice(0, 6).map((contract: any) => (
              <ContractCard key={contract.contractAddr} contract={contract} />
            ))}
          </div>
          {/* <div className="grid grid-cols-1 gap-9 col-span-1">
            <h2 className="flex items-center gap-3 justify-start text-lg">
              <Image src={FlameIcon} alt="Flame icon" className="h-[25px]" />
              Popular smart contracts
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
