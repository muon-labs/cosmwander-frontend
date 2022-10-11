import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-[4.68rem] bg-cw-grey-900 flex items-center justify-center p-4">
      <div className="flex items-center justify-between max-w-[1425px] w-full">
        <img src="/images/muon.svg" alt="Muon Logo" />
        <ul className="flex flex-wrap items-center text-cw-grey-400 gap-4">
          <li>
            <a href="https://t.me/cosmwander" target="_blank" rel="noreferrer" className="hover:underline md:mr-6">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/cosmwander" target="_blank" rel="noreferrer" className="hover:underline md:mr-6">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
