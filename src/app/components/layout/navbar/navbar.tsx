import HeaderAnimation from "@/utils/HeaderAnimation";
import Link from "next/link";
import React from "react";
import NavItem from "./_components/NavItem";
import MobileMenuNav from "./_components/MobileMenuNav";

export const Navbar = () => {
  return (
    <HeaderAnimation>
      <nav className="relative container mt-7 w-10/12 mx-auto flex items-center justify-between flex-row py-8 px-4 sm:pb-8 bg-opacity-60 gap-5 lg:gap-0 shadow-xl">
        <div>
          <h1 className="text-lg font-atkinsonHyperlegible">
            <Link href="/">Mizanur();</Link>
          </h1>
        </div>

        <div className="ml-[-0.80rem]">
          <MobileMenuNav />

          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  );
};
