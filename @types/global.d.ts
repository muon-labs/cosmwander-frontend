import { NextPage } from "next";
import React, { PropsWithChildren } from "react";
import { Window as KeplrWindow } from "@keplr-wallet/types";

declare global {
  interface Window extends KeplrWindow {}
  interface NextPageWithLayout extends NextPage {
    Layout: React.FC<PropsWithChildren<{}>>;
  }
}
