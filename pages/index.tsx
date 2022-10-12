import Head from "next/head";
import { SearchInput } from "../components/Input";
import { Layout } from "../components/Layout";

const Home: NextPageWithLayout = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Cosmwander</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col gap-[40px] py-11 items-center">
          <h1 className="text-2xl">The easiest way to explore CosmWasm smart contacts</h1>
          <SearchInput placeholder="Enter interchain smart contract address or code id" scale="lg" />
        </div>
        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-9 w-full border-t border-cw-grey-700">
          {/* <div className="grid grid-cols-1 gap-9 col-span-1">
            <h2 className="flex items-center gap-3 justify-start text-lg">
              <Image src={FlameIcon} alt="Flame icon" className="h-[25px]" />
              Popular smart contracts
            </h2>
            <ContractCard />
            <ContractCard />
            <ContractCard />
          </div>
          <div className="grid grid-cols-1 gap-9 col-span-1">
            <h2 className="flex items-center gap-3 justify-start text-lg">
              <Image src={ClockIcon} alt="Clock icon" className="h-[25px]" />
              Latest smart contracts
            </h2>
            <ContractCard />
            <ContractCard />
            <ContractCard />
          </div> */}
        </div>
      </div>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
