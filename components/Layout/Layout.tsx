import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />
      <main className="max-w-[1425px] mx-[auto] my-0 flex-1 p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
