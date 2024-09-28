"use client";

import { navigationKeys } from "@/constant/menu";
import { useTranslations } from "next-intl";
import MainNavbar from "./MainNavbar";
import MiddleNavbar from "./MiddleNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const t = useTranslations("HomePage");

  const items = navigationKeys.map((key) => {
    return {
      key: t(`Navigation.${key}.link`),
      label: t(`Navigation.${key}.title`),
      href: t(`Navigation.${key}.link`),
    };
  });

  return (
    <>
      <TopNavbar />
      <div className="hidden md:block">
        <MiddleNavbar />
      </div>
      <MainNavbar items={items} />
    </>
  );
};

export default Navbar;
