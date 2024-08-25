import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import { RxDoubleArrowRight } from "react-icons/rx";

const Hero = () => {
  const t = useTranslations("HomePage");

  const heroKeys = ["tree-plane"];

  return (
    // Hero Section
    <>
      {heroKeys?.map((key) => {
        return (
          <div
            key={key}
            style={{
              backgroundImage: `url(${assets.images.iroHeroBgCrop.src})`,
            }}
            className=" h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] bg-no-repeat bg-cover relative bg-center lg:bg-top "
          >
            {/* set a background with black shad with #000000 opacity 66% and white with 0 opacity */}
            <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(100, 100, 100, 0)] h-full w-full"></div>
            <RootContainer>
              <div className="flex items-center justify-start h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] text-white ">
                <div className="max-w-xl z-10 text-center lg:text-start">
                  <h1 className="font-ubuntu text-4xl lg:text-6xl capitalize font-medium">
                    {t(`Hero.${key}.title`)}
                  </h1>
                  <p className="pt-4 lg:pt-7 pb-14 text-sm">
                    {t(`Hero.${key}.description`)}
                  </p>
                  <Button
                    size="large"
                    type="primary"
                    iconPosition="end"
                    icon={<RxDoubleArrowRight />}
                  >
                    {t(`Hero.${key}.button`)}
                  </Button>
                </div>
              </div>
            </RootContainer>
          </div>
        );
      })}
    </>
  );
};

export default Hero;
