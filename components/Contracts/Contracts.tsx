import React, { useEffect, useState } from "react";
import { useCosmos } from "~/providers/CosmosProvider";

import ContractCard from "../ContractCard";
import Pagination from "../Pagination ";
import { useQuery } from "react-query";

interface Props {
  contracts: string[];
}

const Contracts: React.FC<Props> = ({ contracts: contractAddresses }) => {
  const { chainName, queryService } = useCosmos();
  const [page, setPage] = useState(0);
  const { data: contracts } = useQuery(
    ["contracts_by_code", chainName],
    () => queryService.getContractsDetails(chainName, contractAddresses.slice(page, (page + 1) * 6)),
    {
      cacheTime: 1000 * 60,
    }
  );

  return (
    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-9">
      {contracts.map((contract: any, i: number) => (
        <ContractCard key={i} contract={contract} />
      ))}
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
