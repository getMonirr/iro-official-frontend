import { Button } from "antd";
import { useTranslations } from "next-intl";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  const t = useTranslations("HomePage");
  return (
    <Button icon={<AiOutlineLogin />} type="primary">
      {t("Button.Login.title")}
    </Button>
  );
};

export default Login;
