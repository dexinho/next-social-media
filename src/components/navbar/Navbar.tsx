import Link from "next/link";
import React from "react";
import NavLink from "./nav-link/NavLink";

const Navbar = () => {
  return (
    <div className="bg-slate-700 p-4 flex justify-between">
      <div>Logo</div>
      <NavLink />
    </div>
  );
};

export default Navbar;
