import { useRouter } from "next/router";
import React from "react";
import { Chain } from "../../interfaces/chains";
import { IntlAddress } from "../../utils/intl";

interface Props {
  searchValue?: string;
}

const NotExist: React.FC<Props> = ({ searchValue }) => {
  // const value = searchValue.length >= 20 ? IntlAddress(searchValue) : searchValue;
  return (
    <div className="flex items-center justify-center flex-col w-full h-[50vh] gap-4">
      <div className="text-5xl">Whoops!</div>
      <p className="text-xl">Sorry, it seems that there are no results for the search</p>
      {/*    <p className="flex gap-4 items-center">
        <span className={`text-chain-600 text-3xl font-bold`}>{value}</span>
        <span>in</span>
        <span className={`text-chain-600 text-3xl font-bold capitalize`}>chain</span>
      </p> */}
    </div>
  );
};

export default NotExist;
