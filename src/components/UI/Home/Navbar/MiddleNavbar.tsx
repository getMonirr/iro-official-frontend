import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { LiaDonateSolid } from "react-icons/lia";
import LanguageSwitcher from "../Language/LanguageSwitcher";

const MiddleNavbar = () => {
  return (
    <div className="h-20 flex items-center justify-between">
      <RootContainer>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Button icon={<LiaDonateSolid />} type="primary">
              Donation
            </Button>
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
            <Button icon={<AiOutlineLogin />} type="primary">
              Login
            </Button>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default MiddleNavbar;
