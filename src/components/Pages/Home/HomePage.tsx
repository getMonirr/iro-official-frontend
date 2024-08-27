import Footer from "@/components/UI/Footer/Footer";
import AboutUs from "@/components/UI/Home/About/AboutUs";
import Hero from "@/components/UI/Home/Hero/Hero";
import MainNavbar from "@/components/UI/Home/Navbar/MainNavbar";
import MiddleNavbar from "@/components/UI/Home/Navbar/MiddleNavbar";
import TopNavbar from "@/components/UI/Home/Navbar/TopNavbar";
import IroProjects from "@/components/UI/Home/Projects/IroProjects";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <div className="hidden md:block">
        <MiddleNavbar />
      </div>
      <MainNavbar />
      <Hero />
      <AboutUs />
      <IroProjects />
      <Footer />
    </>
  );
};

export default HomePage;
