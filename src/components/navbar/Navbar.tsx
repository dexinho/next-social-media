import Link from "next/link";
import React from "react";
import NavLinks from "./nav-links/NavLinks";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
