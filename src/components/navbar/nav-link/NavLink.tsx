"use client";

import React from "react";
import { LinkProps } from "../../../../types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: LinkProps[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

// temp
const session = true;
const isAdmin = true;
const selectedNavLinkBgColor = "bg-black";

const NavLink = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-4 justify-center items-center">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`${
            link.path === pathName && selectedNavLinkBgColor
          } p-2 rounded-xl`}
        >
          {link.title}
        </Link>
      ))}
      {session ? (
        <div className="flex gap-4 justify-center items-center">
          {session && (
            <div>
              <Link
                href="/admin"
                className={`${
                  pathName === "/admin" && selectedNavLinkBgColor
                } p-2 rounded-xl`}
              >
                Admin
              </Link>
              <button>LOGOUT</button>
            </div>
          )}
        </div>
      ) : (
        <button>LOGIN</button>
      )}
    </div>
  );
};

export default NavLink;
