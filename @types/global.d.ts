import { NextPage } from "next";
import React, { PropsWithChildren } from "react";

declare global {
  interface NextPageWithLayout extends NextPage {
    Layout: React.FC<PropsWithChildren<{}>>;
  }
}
