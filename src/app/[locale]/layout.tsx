import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

// custom import
import AllProviders from "@/providers/AllProviders";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// ubuntu font
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRO Official",
  description: "Created by IRO Dev Team",
};

// RootLayout component
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
        // horizontal scrolling hidden
        overflowX: "hidden",
      }}
    >
      <body className={ubuntu.className}>
        <AllProviders>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AllProviders>
      </body>
    </html>
  );
}
