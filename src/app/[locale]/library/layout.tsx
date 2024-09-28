import TopNavbar from "@/components/Pages/Library/Navbar/TopNavbar";
import Footer from "@/components/UI/Footer/Footer";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const LibraryLayout = ({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  );
};

export default LibraryLayout;
