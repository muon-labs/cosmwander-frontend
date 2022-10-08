import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="min-h-[4.5rem] p-4">
      <div className="max-w-[1425px] mx-[auto] my-0 flex items-center justify-between py-4">
        <img
          src="/images/cosmwander.svg"
          alt="CosmWander Logo"
          className="h-[48px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
