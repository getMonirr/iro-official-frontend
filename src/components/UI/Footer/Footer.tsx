import RootContainer from "@/components/Shared/RootContainer";
import SectionStarter from "@/components/Shared/SectionStarter";
import { siteLinks } from "@/constant/links";
import { extraNavigationKeys, navigationKeys } from "@/constant/menu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslations("HomePage.Footer");
  return (
    <>
      <SectionStarter className={"bg-iro-bg-yellow"}>
        <div className="font-ubuntu bg-iro-bg-yellow">
          <RootContainer>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div>
                <p className=" pb-4 lg:pb-6 text-iro-green">
                  {t("address.title")}
                </p>
                <div className="space-y-1 text-zinc-600">
                  <p>{t("address.address")}</p>
                  <p>Support: salam@iro.org</p>
                  <p>Helpline: {t("address.phone")} </p>
                  <p>Available : {t("address.availability")}</p>
                </div>
              </div>
              <div>
                <p className=" pb-4 lg:pb-6 text-iro-green">
                  {t("usefulLink.title")}
                </p>
                <div className="space-y-1 text-zinc-600 flex flex-col">
                  {navigationKeys.map((key) => (
                    <Link
                      key={key}
                      className="hover:text-iro-green"
                      href={t(`usefulLink.links.${key}.link`)}
                    >
                      {t(`usefulLink.links.${key}.title`)}
                    </Link>
                  ))}
                  {extraNavigationKeys.map((key) => (
                    <Link
                      key={key}
                      className="hover:text-iro-green"
                      href={t(`usefulLink.extraLinks.${key}.link`)}
                    >
                      {t(`usefulLink.extraLinks.${key}.title`)}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className=" pb-4 lg:pb-6 text-iro-green">Follow Us</p>
                <div className="flex items-center gap-4 justify-start">
                  <Link href={siteLinks.socials.facebook}>
                    <FaFacebook size={25} className="hover:text-iro-green" />
                  </Link>
                  <Link href={siteLinks.socials.linkedIn}>
                    <FaLinkedin size={25} className="hover:text-iro-green" />
                  </Link>
                  <Link href={siteLinks.socials.xTwitter}>
                    <FaXTwitter size={25} className="hover:text-iro-green" />
                  </Link>
                </div>
              </div>
            </div>
          </RootContainer>
        </div>
      </SectionStarter>
      <div className="py-8 font-ubuntu text-center font-medium">
        {/* get current year */}
        <p>
          {t("copyRight.title")} - {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
