import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button, Carousel } from "antd";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";
import GoDown from "../../ScrollBar/GoDown";

const Hero = () => {
  const t = useTranslations("HomePage");

  const heroKeys = ["tree-plane", "next-hero"];
  const image = [assets.images.iroHeroBgCrop.src, assets.images.iroHeroBg2.src];

  return (
    // Hero Section
    <>
      <Carousel
        dotPosition="right"
        infinite
        autoplay
        effect="fade"
        pauseOnHover={false}
        pauseOnDotsHover
        autoplaySpeed={5000}
      >
        {heroKeys?.map((key, index) => {
          return (
            <div
              key={key}
              style={
                {
                  // backgroundImage: `url(${assets.images.iroHeroBgCrop.src})`,
                }
              }
              className=" h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] bg-no-repeat bg-cover relative bg-center lg:bg-top "
            >
              {/* set a background with black shad with #000000 opacity 66% and white with 0 opacity */}
              <div className="absolute bg-gradient-to-r  from-[rgba(0,0,0,0.8)] via-[rgba(100,100,100,0)] to-[rgba(100, 100, 100, 0)] h-full w-full">
                <Image
                  src={image[index]}
                  alt="Hero"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="-z-10"
                />
              </div>
              <RootContainer>
                <div className="flex items-center justify-start h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] text-white ">
                  <div className="max-w-xl z-20 text-center lg:text-start">
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
                <GoDown />
              </RootContainer>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Hero;
