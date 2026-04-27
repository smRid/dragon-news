"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="container mx-auto mt-5 flex max-w-[1140px] items-center justify-between gap-4 px-4">
      <div></div>
      <ul className="flex items-center justify-between gap-4 text-[17px] font-medium text-[#706f6f]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={""}>
            Career
          </NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : user ? (
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-[42px] text-black" />
          <button
            className="h-11 bg-[#403f3f] px-9 text-[17px] font-semibold text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-[42px] text-black" />
          <button className="h-11 bg-[#403f3f] px-10 text-[17px] font-semibold text-white">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
