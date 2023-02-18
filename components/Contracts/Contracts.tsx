import React, { useEffect, useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { useWallet } from "../../providers/WalletProvider";
import { getContractsDetails } from "../../services/cosmwander";
import ContractCard from "../ContractCard";
import Pagination from "../Pagination ";

interface Props {
  contracts: string[];
  color?: string;
}

const Contracts: React.FC<Props> = ({ contracts: contractAddresses, color }) => {
  const { chainColor } = useTheme();
  const { chain } = useWallet();
  const [currentPage, setCurrentPage] = useState(0);
  const [contracts, setContracts] = useState([]);
  const pageColor = color ? color : chainColor;

  useEffect(() => {
    const loadContracts = async () => {
      const pagiantedContracts = await getContractsDetails(chain.chainName.toLowerCase(), contractAddresses.slice(currentPage, (currentPage + 1) * 6));
      setContracts(pagiantedContracts);
    };
    loadContracts();
  }, [currentPage]);
  return (
    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-9">
      {contracts.map((contract, i) => (
        <ContractCard key={i} contract={contract} color={pageColor} />
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
