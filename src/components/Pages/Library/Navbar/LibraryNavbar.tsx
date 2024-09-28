import MainNavbar from "@/components/UI/Home/Navbar/MainNavbar";
import { navigationKeys } from "@/constant/menu";
import { useTranslations } from "next-intl";

const LibraryNavbar = () => {
  const t = useTranslations("HomePage");

  const items = navigationKeys.map((key) => {
    return {
      key: t(`Navigation.${key}.link`),
      label: t(`Navigation.${key}.title`),
      href: t(`Navigation.${key}.link`),
    };
  });
  return <MainNavbar items={items} isDonationShow={false} isLogoShow={false} />;
};

export default LibraryNavbar;
