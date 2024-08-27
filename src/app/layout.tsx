import { Header } from "./components";
import ActiveSectionContextProvider from "./context/active-section-context";
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}
      >
        {/* <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[-11rem] h-[31.25rem] w-1/3 rounded-full blur-[10rem] sm:w-1/2"></div>
        <div className="bg-[#3320c4] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-2/3 rounded-full blur-[10rem] sm:w-1/2 md:left-[-33rem] lg:left-[-28rem] xl:left-[-25rem] 2xl:left-[-5rem]"></div> */}
        <div className="-z-10 bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] absolute h-[31.25rem] w-full"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
