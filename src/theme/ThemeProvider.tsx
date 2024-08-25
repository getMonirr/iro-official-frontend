import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#3A643B", // green
          // borderRadius: 2,

          // Alias Token
          // colorBgContainer: "#f6ffed",
          fontFamily: "Ubuntu",
        },
        components: {
          Button: {
            primaryShadow: "none",
            fontFamily: "Ubuntu",
          },
          Menu: {
            // itemColor: "#FFFFFF",
            horizontalItemSelectedColor: "#FFFFFF",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
