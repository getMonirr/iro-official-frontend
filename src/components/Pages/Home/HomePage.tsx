import Footer from "@/components/UI/Footer/Footer";
import AboutUs from "@/components/UI/Home/About/AboutUs";
import Hero from "@/components/UI/Home/Hero/Hero";
import Navbar from "@/components/UI/Home/Navbar/Navbar";
import IroProjects from "@/components/UI/Home/Projects/IroProjects";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <IroProjects />
      <Footer />
    </>
  );
};

export default HomePage;
