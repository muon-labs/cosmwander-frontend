import React from "react";

const SkeletonCodeOrContract: React.FC = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="border-t border-cw-grey-700 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
          <div className="col-span-5 flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-[22px] w-[47px] bg-cw-grey-700 rounded-[3px]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[22px] w-[47px] bg-cw-grey-700 rounded-[3px]" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[86px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[86px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[91px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[386px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[86px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[630px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[102px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[38px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[86px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[38px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[86px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-4">
            <div className="h-[19px] w-[162px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[105px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[47px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[82px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-2">
            <div className="h-[19px] w-[82px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[69px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[27px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-1">
            <div className="h-[19px] w-[152px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-2">
            <div className="h-[19px] w-[357px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="col-span-5 flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-[19px] w-[110px] bg-cw-grey-700 rounded-[3px]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[19px] w-[181px] bg-cw-grey-700 rounded-[3px]" />
            </div>
          </div>
        </div>
        <div className="mt-[7.75rem] mb-3">
          <div className="h-[51px] w-[256px] bg-cw-grey-800 rounded-[8px]">
            <div className="h-full w-[147px] bg-cw-grey-700 rounded-[8px]" />
          </div>
        </div>
      </div>
      <div className="border-t border-cw-grey-700 w-full py-6 ">
        <div className="h-[51px] w-[338px] bg-cw-grey-800 rounded-[8px] my-5">
          <div className="h-full w-[128px] bg-cw-grey-700 rounded-[8px]" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="h-[19px] w-[67px] bg-cw-grey-700 rounded-[3px]" />
            <div className="h-[35px] w-[49px] bg-cw-grey-700 rounded-[3px]" />
          </div>
          <div className="h-[354px] w-full bg-cw-grey-800 rounded-[6px]" />
        </div>
      </div>
      <div className="border-t border-cw-grey-700 w-full flex items-end justify-end mb-6">
        <div className="h-[51px] w-[121px] bg-cw-grey-700 rounded-[8px] mt-6" />
      </div>
    </div>
  );
};

export default SkeletonCodeOrContract;
