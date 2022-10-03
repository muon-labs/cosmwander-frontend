import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-[#151416]">
      <span className="text-sm text-secondary sm:text-center">
      <img src='/muon_logo.png' />
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            How cosmwander works
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Telegram group
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Terms of service
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
