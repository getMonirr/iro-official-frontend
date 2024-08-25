import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const DesktopNavbar = ({ SiteMenu }: { SiteMenu: any }) => {
  const router = useRouter();
  return (
    <div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 0",
          backgroundColor: "transparent",
        }}
        className="desktop-navbar"
      >
        {SiteMenu}
      </Header>
    </div>
  );
};

export default DesktopNavbar;
