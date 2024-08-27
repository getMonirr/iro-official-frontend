import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import SectionParagraph from "@/components/Shared/SectionParagraph";
import SectionStarter from "@/components/Shared/SectionStarter";
import SectionTitle from "@/components/Shared/SectionTitle";
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <SectionTitle>{t("title")}</SectionTitle>
              <SectionParagraph>{t("description")}</SectionParagraph>
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
