import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./globals.css";

// custom import
import { routing } from "@/i18n/routing";
import AllProviders from "@/providers/AllProviders";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import { polyfillPromiseWithResolvers } from "@/utils/polyfilsResolver";

import "core-js/full/promise/with-resolvers.js";

polyfillPromiseWithResolvers();

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// RootLayout component
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
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
