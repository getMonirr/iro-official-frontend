import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import SectionStarter from "@/components/Shared/SectionStarter";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";

const AboutUs = () => {
  const t = useTranslations("HomePage.AboutUs");
  return (
    <SectionStarter className={"bg-iro-light-green"}>
      <div id="down-page" className="bg-iro-light-green">
        <RootContainer>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold underline underline-offset-8 text-iro-green">
                {t("title")}
              </h1>
              <p className="text-lg mt-5 font-ubuntu ">{t("description")}</p>
              <Button
                className="mt-8"
                type="primary"
                icon={<RxDoubleArrowRight />}
                iconPosition="end"
                size="middle"
              >
                {t("button")}
              </Button>
            </div>
            <div>
              <Image
                src={assets.images.iroAboutTree.src}
                alt="About Us"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </RootContainer>
      </div>
    </SectionStarter>
  );
};

export default AboutUs;
