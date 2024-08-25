import { Button } from "antd";
import { useTranslations } from "next-intl";
import { LiaDonateSolid } from "react-icons/lia";

const Donation = () => {
  const t = useTranslations("HomePage");
  return (
    <Button icon={<LiaDonateSolid />} type="primary">
      {t("Button.Donation.title")}
    </Button>
  );
};

export default Donation;
