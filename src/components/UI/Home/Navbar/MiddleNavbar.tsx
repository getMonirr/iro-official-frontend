import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import Donation from "./Donation";
import Login from "./Login";

const MiddleNavbar = () => {
  return (
    <div className="h-20 flex items-center justify-between">
      <RootContainer>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Donation />
          </div>
          <div>
            <Link href="/">
              <Image
                src={assets.images.iroLogo}
                alt="IRO LOGO"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <LanguageSwitcher />
            <Login />
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default MiddleNavbar;
