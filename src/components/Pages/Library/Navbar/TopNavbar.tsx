import RootContainer from "@/components/Shared/RootContainer";
import Donation from "@/components/UI/Home/Navbar/Donation";
import Login from "@/components/UI/Home/Navbar/Login";
import Title from "antd/es/typography/Title";
import LibraryNavbar from "./LibraryNavbar";
import SearchBar from "./SearchBar";

const TopNavbar = () => {
  return (
    <>
      <div className="lg:hidden block">
        <LibraryNavbar />
      </div>
      <RootContainer>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-16 mt-4">
          <div className="lg:flex items-center justify-between gap-6 hidden">
            <Title
              style={{
                marginBottom: 0,
              }}
              level={2}
            >
              IRO Library
            </Title>
            {/* show small device and hide large device */}
            <div className="block lg:hidden">menu</div>
          </div>
          {/*  hide small device and show large device */}
          <div className="block lg:hidden mx-auto">
            <Donation />
          </div>
          <div className="flex-1">
            <SearchBar />
          </div>
          {/* show large device and hide small device */}
          <div className="hidden lg:block">
            <Login />
          </div>
        </div>
      </RootContainer>
      <div className="lg:block hidden mt-8">
        <LibraryNavbar />
      </div>
    </>
  );
};

export default TopNavbar;
