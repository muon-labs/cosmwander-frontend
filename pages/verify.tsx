import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { SimpleButton } from "../components/Buttons";
import SimpleInput from "../components/Input/SImpleInput";
import { useTheme } from "../providers/ThemeProvider";
import { verifyCode } from "../services/cosmwander";
import { toast } from "react-hot-toast";

const Verify: React.FC = () => {
  const { chainColor } = useTheme();
  const { register, handleSubmit } = useForm();
  const { query } = useRouter();

  const onSubmit = async (data: unknown) => {
    toast.promise(verifyCode(query.chainId as string, query.codeId as string, data), {
      loading: "Verifying...",
      success: "Verified!",
      error: "Error: Failed to verify",
    });
  };

  return (
    <form
      className="w-full h-full flex items-center justify-center flex-col max-w-[48rem] mx-auto gap-10 my-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl">Verify Contract/Code ID</h1>
      <div className="grid grid-cols-5 w-full">
        <div className="text-cw-grey-400">Code ID</div>
        <div className="text-cw-grey-400 col-span-4">Creator</div>
        <div className={`text-chain-${chainColor}-400`}>{query.codeId}</div>
        <div className={`text-chain-${chainColor}-400 col-span-4`}>{query.creator}</div>
      </div>
      <div className="w-full">
        <SimpleInput placeholder="Github Repository" className="px-3 py-2 w-full rounded-lg" {...register("repoUrl")} />
        <p className="mt-2 text-xs text-cw-grey-400">e.g. muonlabs/cosmwander</p>
      </div>
      <div className="w-full">
        <SimpleInput placeholder="Contract Path" className="px-3 py-2 w-full rounded-lg" {...register("repoPath")} />
        <p className="mt-2 text-xs text-cw-grey-400">e.g. contracts/lorem/xyz.json</p>
      </div>
      {/* <div className="w-full">
        <Checkbox name="" labelRight="Link visible" />
      </div> */}
      <div className="flex gap-4 w-full">
        <SimpleInput placeholder="Git Commit Hash" className="px-3 py-2 flex-1 rounded-lg" {...register("commitHash")} />
        <SimpleButton className="px-3 py-2">Submit</SimpleButton>
      </div>
    </form>
  );
};

export default Verify;
