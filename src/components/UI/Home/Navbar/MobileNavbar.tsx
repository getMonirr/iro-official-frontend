import { Drawer } from "antd";

interface MobileNavbarProps {
  onClose: any;
  open: any;
  SiteMenu: any;
}

const MobileNavbar = ({ onClose, open, SiteMenu }: MobileNavbarProps) => {
  return (
    <Drawer
      title="IRO Official"
      closable={false}
      onClose={onClose}
      open={open}
      placement="left"
      width={200}
    >
      {SiteMenu}
    </Drawer>
  );
};

export default MobileNavbar;
