"use client";

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Uses",
    path: "/uses",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <>
      <nav className="flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathName && "text-accent"
              } capitalize font-medium hover:border-b-2 transition-all
            }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
