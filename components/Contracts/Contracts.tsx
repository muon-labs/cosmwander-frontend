import React, { useState } from "react";
import { useClient } from "../../providers/ThemeProvider";
import ContractCard from "../ContractCard";
import Pagination from "../Pagination ";

interface Props {
  contracts: string[];
  color?: string;
}

const Contracts: React.FC<Props> = ({ contracts, color }) => {
  const { chainColor } = useClient();
  const pageColor = color ? color : chainColor;
  return (
    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-9">
      {/* <ContractCard className="col-span-1" color={color}/>
      <ContractCard className="col-span-1" color={color}/>
      <ContractCard className="col-span-1" color={color}/>
      <ContractCard className="col-span-1" color={color}/>
      <ContractCard className="col-span-1" color={color}>
      <ContractCard className="col-span-1" color={color}> */}
      {/* <div className="col-span-2 flex items-center justify-end mt-10 color={color}">
        <Pagination maxNumber={0} />
      </div> */}
    </div>
  );
};

export default Contracts;
