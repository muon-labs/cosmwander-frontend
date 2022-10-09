import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NavbarSearch from "../Navbar/NavbarSearch";

const LayoutSearch: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <NavbarSearch />
      <main className="max-w-[1425px] mx-[auto] my-0 flex-1 py-4 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSearch;
