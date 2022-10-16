import React from "react";
import DefaultSkeleton from "./DefaultSkeleton";

const CodeDetailsSkeletons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full animate-pulse">
      <div className="col-span-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <DefaultSkeleton className="h-[22px] w-[47px] rounded-[3px]" />
        </div>
        <div className="flex items-center gap-2">
          <DefaultSkeleton className="h-[22px] w-[47px] rounded-[3px]" />
        </div>
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[86px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[86px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[91px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[386px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[86px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[630px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[102px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[38px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[86px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[38px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[86px] rounded-[3px]" />
      </div>
      <div className="col-span-4">
        <DefaultSkeleton className="h-[19px] w-[162px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[105px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[47px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[82px] rounded-[3px]" />
      </div>
      <div className="col-span-2">
        <DefaultSkeleton className="h-[19px] w-[82px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[69px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[27px] rounded-[3px]" />
      </div>
      <div className="col-span-1">
        <DefaultSkeleton className="h-[19px] w-[152px] rounded-[3px]" />
      </div>
      <div className="col-span-2">
        <DefaultSkeleton className="h-[19px] w-[357px] rounded-[3px]" />
      </div>
      <div className="col-span-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <DefaultSkeleton className="h-[19px] w-[110px] rounded-[3px]" />
        </div>
        <div className="flex items-center gap-2">
          <DefaultSkeleton className="h-[19px] w-[181px] rounded-[3px]" />
        </div>
      </div>
    </div>
  );
};

export default CodeDetailsSkeletons;
