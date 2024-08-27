import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import SectionStarter from "@/components/Shared/SectionStarter";
import SectionTitle from "@/components/Shared/SectionTitle";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

const IroProjects = () => {
  return (
    <SectionStarter>
      <RootContainer>
        <SectionTitle className="mb-16">Our Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              // className="shadow-none hover:shadow-md"
              key={index}
              className="shadow-none hover:shadow-md"
              cover={
                <Image
                  alt="example"
                  src={
                    index % 2 === 0
                      ? assets.images.projectImage1.src
                      : assets.images.projectImage2.src
                  }
                  width={300}
                  height={200}
                />
              }
              actions={[]}
            >
              <Meta
                title="Islamic knowledge competition"
                description="It is proved from various hadiths that planting trees is a good deed. As long as the planted tree is alive, all the animals and people will get flowers,"
                style={{
                  color: "green",
                }}
              />
              <Button key={"see more"} type="primary" block className="mt-8">
                Donate Now
              </Button>
            </Card>
          ))}
        </div>
        <div className="max-w-sm mx-auto">
          <Button type="primary" className="mt-8 " size="large" block>
            View More Projects
          </Button>
        </div>
      </RootContainer>
    </SectionStarter>
  );
};

export default IroProjects;
