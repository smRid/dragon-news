"use client";

import { usePathname } from "next/navigation";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import Navbar from "./Navbar";

const MainShell = ({ children }) => {
  const pathname = usePathname();
  const isAbout = pathname === "/about-us";

  return (
    <>
      <Header date={isAbout ? "Sunday, November 27, 2022" : undefined} />
      {!isAbout && (
        <>
          <BreakingNews />
          <Navbar />
        </>
      )}
      {children}
    </>
  );
};

export default MainShell;
