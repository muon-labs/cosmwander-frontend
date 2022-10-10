import React, { useState } from "react";
import { GroupButtons } from "../Buttons";
import TabsContainer from "../TabsContainer";
import Instantiate from "./Instantiate";

interface Props {
  codeId: string;
}

const SeeContract: React.FC<Props> = ({ codeId }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");
  const contractTabGroup = [
    {
      content: "Instantiate",
      key: "instantiate",
    },
    {
      content: "Query",
      key: "query",
    },
    {
      content: "Execute",
      key: "execute",
    },
  ];
  return (
    <>
      <div className="mt-3 mb-[4rem]">
        <GroupButtons selectedTab={contractTab} handlerTab={setContractTab} tabs={contractTabGroup} />
      </div>
      <TabsContainer
        selectedTab={contractTab}
        options={[
          { key: "instantiate", container: <Instantiate codeId={codeId}/> },
          { key: "query", container: <p>Query</p> },
          { key: "execute", container: <p>Execute</p> },
        ]}
      />
    </>
  );
};

export default SeeContract;
