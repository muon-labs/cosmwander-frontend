import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="min-h-[6.5rem]">
      <div className="max-w-[1425px] mx-[auto] my-0 flex items-center justify-between py-4">
        <img src="/images/cosmwander.svg" alt="CosmWander Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
