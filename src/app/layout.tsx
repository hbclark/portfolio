import { Footer, Header, ThemeSwitch } from "./components";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/themeContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clark's Portfolio",
  description: "Clark is a full-stack developer with 1 year experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-3
       dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="-z-10 bg-gradient-to-r from-[#f4e7e7] via-50% via-[#e5e3ef] to-[#e8e7ee] absolute h-[50rem] sm:h-[31.25rem] w-full dark:from-[#946263] dark:via-50% dark:via-[#78759c] dark:to-[#636394] "></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
