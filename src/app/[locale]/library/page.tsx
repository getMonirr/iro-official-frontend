import BestBookSection from "@/components/Pages/Library/Section/BestBookSection";
import RootContainer from "@/components/Shared/RootContainer";
import SectionParagraph from "@/components/Shared/SectionParagraph";
import SectionStarter from "@/components/Shared/SectionStarter";
import SectionTitle from "@/components/Shared/SectionTitle";

const LibraryPage = async () => {
  return (
    <RootContainer>
      <SectionStarter>
        <SectionTitle>Best Book</SectionTitle>
        <SectionParagraph>
          Best book is a book that is the best.
        </SectionParagraph>

        <BestBookSection />
      </SectionStarter>
    </RootContainer>
  );
};

export default LibraryPage;
