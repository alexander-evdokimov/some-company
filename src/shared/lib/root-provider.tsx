"use client";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import "@ant-design/v5-patch-for-react-19";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: { colorPrimary: theme.colors.primary, fontFamily: "var(--font-nunito)" },
          components: {
            Typography: {
              fontSizeHeading1: 48,
              fontSizeHeading2: 48,
              fontSizeHeading3: 24,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
};
