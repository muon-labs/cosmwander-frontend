import React, { useState } from "react";
import { CodeDetails } from "../../interfaces/code-details";
import { GroupButtons } from "../Buttons";
import TabsContainer from "../TabsContainer";

import { InstantiateMsgBuilder } from "./MsgBuilder";
import Instantiate from "./Instantiate/Instantiate";
interface Props {
  codeDetails: CodeDetails;
  skeleton?: boolean;
}

const CodeSchema: React.FC<Props> = ({ codeDetails, skeleton }) => {
  const [contractTab, setContractTab] = useState<string>("instantiate");

  const container = codeDetails?.contractSchema?.instantiate ? (
    <Instantiate isContract={false} json={codeDetails?.contractSchema?.instantiate} />
  ) : (
    <InstantiateMsgBuilder codeId={codeDetails?.codeId} />
  );

  return (
    <>
      <div className="mt-3 mb-[3rem] flex items-center justify-between">
        <GroupButtons
          selectedTab={contractTab}
          handlerTab={setContractTab}
          tabs={[{ content: "Instantiate", key: "instantiate" }]}
          skeleton={skeleton}
        />
      </div>
      <TabsContainer skeleton={skeleton} selectedTab={contractTab} options={[{ key: "instantiate", container }]} />
    </>
  );
};

export default CodeSchema;
