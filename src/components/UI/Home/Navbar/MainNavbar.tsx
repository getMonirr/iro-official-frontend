"use client";

import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import DesktopNavbar from "./DesktopNavbar";
import Donation from "./Donation";
import Login from "./Login";
import MobileNavbar from "./MobileNavbar";

interface INavItems {
  key: string;
  label: string;
  href: string;
}

const MainNavbar = ({
  items,
  isLogoShow,
  isDonationShow,
}: {
  items: INavItems[];
  isLogoShow?: boolean;
  isDonationShow?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const DesktopSiteMenu = (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["/"]}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        backgroundColor: "transparent",
        color: "#FFFFFF",
      }}
      className="text-white"
      overflowedIndicator={<IoMenuOutline />}
      onSelect={(item) => {
        return router.push(item.key);
      }}
    />
  );
  const MobileSiteMenu = (
    <Menu
      mode="vertical"
      defaultSelectedKeys={["/"]}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        // backgroundColor: "#E6F4E0",
      }}
      overflowedIndicator={<IoMenuOutline size={240} />}
      onSelect={(item) => {
        return router.push(item.key);
      }}
    />
  );

  return (
    <div className="bg-iro-light-green md:bg-iro-green flex items-center py-2 md:py-0 sticky top-0 z-50 shadow-xl">
      <RootContainer>
        {/* hidden in large device and show small device */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-4">
            <Button onClick={showDrawer} icon={<IoMdMenu />} />
            {isLogoShow && (
              <Link href="/">
                <Image
                  src={assets.images.iroLogo}
                  alt="IRO LOGO"
                  width={25}
                  height={25}
                />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            {isDonationShow && <Donation />}
            <Login />
          </div>
        </div>
        {/* hidden in small device and show large device */}
        <div className="hidden md:block">
          <DesktopNavbar SiteMenu={DesktopSiteMenu} />
        </div>
        {/* mobile navbar */}
        <MobileNavbar onClose={onClose} open={open} SiteMenu={MobileSiteMenu} />
      </RootContainer>
    </div>
  );
};

export default MainNavbar;
