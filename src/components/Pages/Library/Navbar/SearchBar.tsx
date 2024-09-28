"use client";

import { Button } from "antd";
import Search from "antd/es/input/Search";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton={
        <Button
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
          type="primary"
          shape="circle"
          icon={<IoSearch />}
        >
          Search
        </Button>
      }
      size="large"
      onSearch={(value) => console.log(value)}
    />
  );
};

export default SearchBar;
