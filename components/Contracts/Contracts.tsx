import React from "react";
import ContractCard from "../ContractCard";
import Pagination from "../Pagination ";

const Contracts: React.FC = () => {
  return (
    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-9">
      <ContractCard className="col-span-1" />
      <ContractCard className="col-span-1" />
      <ContractCard className="col-span-1" />
      <ContractCard className="col-span-1" />
      <ContractCard className="col-span-1" />
      <ContractCard className="col-span-1" />
      <div className="col-span-2 flex items-center justify-end mt-10">
        <Pagination maxNumber={10} />
      </div>
    </div>
  );
};

export default Contracts;
