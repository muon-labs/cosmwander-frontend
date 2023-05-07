import React, { useState } from "react";
import { DobleArrowRight, DobleArrowLeft, ArrowLeft, ArrowRight } from "../Icons";
interface Props {
  maxNumber: number;
  onChange?: (currentPage: number) => void;
}

const Pagination: React.FC<Props> = ({ maxNumber, onChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlerChange = (number: number): void => {
    setCurrentPage(number);
    onChange && onChange(number);
  };

  const Buttons = Array.from({ length: maxNumber }, (_, i) => {
    const pageNumber = i + 1;

    return (
      <button
        className={`text-chain-400 disabled:text-cw-grey-400 p-2 pointer w-[30px] h-[30px] flex items-center justify-center transition duration-150 ease-in-out`}
        key={`pagination-${pageNumber}`}
        disabled={pageNumber === currentPage}
        onClick={() => handlerChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  });

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className="bg-cw-grey-850 border border-cw-grey-400 rounded-[6px]  w-[30px] h-[30px] flex items-center justify-center transition duration-150 ease-in-out"
        onClick={() => handlerChange(1)}
        disabled={currentPage === 1}
      >
        <DobleArrowLeft color={currentPage === 1 ? "fill-cw-grey-400" : `fill-chain-400`} />
      </button>
      <button
        className="bg-cw-grey-850 border border-cw-grey-400 rounded-[6px] w-[30px] h-[30px]  flex items-center justify-center transition duration-150 ease-in-out"
        onClick={() => handlerChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft color={currentPage === 1 ? "fill-cw-grey-400" : `fill-chain-400`} />
      </button>
      {Buttons}
      <button
        className="bg-cw-grey-850 border border-cw-grey-400 rounded-[6px]  w-[30px] h-[30px] flex items-center justify-center transition duration-150 ease-in-out"
        onClick={() => handlerChange(currentPage + 1)}
        disabled={currentPage === maxNumber}
      >
        <ArrowRight color={currentPage === maxNumber ? "fill-cw-grey-400" : `fill-chain-400`} />
      </button>
      <button
        className="bg-cw-grey-850 border border-cw-grey-400 rounded-[6px]  w-[30px] h-[30px] flex items-center justify-center transition duration-150 ease-in-out"
        onClick={() => handlerChange(maxNumber)}
        disabled={currentPage === maxNumber}
      >
        <DobleArrowRight color={currentPage === maxNumber ? "fill-cw-grey-400" : `fill-chain-400`} />
      </button>
    </div>
  );
};

export default Pagination;
