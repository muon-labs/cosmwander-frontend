import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar showSearchBar={"/[chain]" !== pathname} />
      <main className="max-w-[1425px] mx-[auto] px-4 2xl:px-0 lg my-0 flex-1 py-4 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
