import Hero from "@/components/UI/Home/Hero/Hero";
import MainNavbar from "@/components/UI/Home/Navbar/MainNavbar";
import MiddleNavbar from "@/components/UI/Home/Navbar/MiddleNavbar";
import TopNavbar from "@/components/UI/Home/Navbar/TopNavbar";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <div className="hidden md:block">
        <MiddleNavbar />
      </div>
      <MainNavbar />
      <Hero />
    </>
  );
};

export default HomePage;
