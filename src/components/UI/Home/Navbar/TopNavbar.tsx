import RootContainer from "@/components/Shared/RootContainer";
import { siteContact, siteLinks } from "@/constant/links";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const TopNavbar = () => {
  return (
    <div className="bg-iro-bg-green text-iro-white">
      <RootContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between pt-1 pb-2 lg:h-9 gap-4">
          <div className="flex justify-between gap-16">
            <div className="flex items-center gap-4 justify-start">
              <Link href={siteLinks.socials.facebook}>
                <FaFacebook />
              </Link>
              <Link href={siteLinks.socials.linkedIn}>
                <FaLinkedin />
              </Link>
              <Link href={siteLinks.socials.xTwitter}>
                <FaXTwitter />
              </Link>
            </div>
            <div className="flex lg:hidden items-center justify-center gap-2">
              <MdOutlineEmail size={20} />
              <span>{siteContact.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-8 justify-end">
            <div className="hidden lg:flex items-center justify-center gap-2">
              <MdOutlineEmail size={20} />
              <span>{siteContact.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MdOutlinePhone size={20} />
              <span>{siteContact.phone}</span>
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default TopNavbar;
