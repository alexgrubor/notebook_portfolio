"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Aleksandra-logo.webp";
import { GoDesktopDownload } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavigationDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <Link className="text-xl" href="/work"> Work</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              display: "flex",
              flexDirection: "column",
              width: "10rem",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <NavigationMenuLink
              style={{ cursor: "pointer" }}
              className="hover:bg-gradient-to-b from-muted/50 to-muted"
            >
              <Link href="/work#webdevelopment" shallow={true}>Web Development</Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              style={{ cursor: "pointer" }}
              className="hover:bg-gradient-to-b from-muted/50 to-muted"
            >
              <Link href="/work#graphicdesign">Graphic Design</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [showMenu, setShowMenu] = useState(false);
  if (isMobile) {
    return (
      <header className="w-full flex items-center justify-between px-14">
        <Image src={Logo} alt="Aleksandra logo" width={108} height={36} />
        {showMenu ? (
          <BsFillArrowDownSquareFill size={40} onClick={() => setShowMenu(!showMenu)}/>
        ) : (
          <GiHamburgerMenu size={40} onClick={() => setShowMenu(!showMenu)} />
        )}

        {showMenu && (
          <div className="absolute top-[7rem] right-10 bg-white shadow-lg z-10 p-5">
            <nav className="flex flex-col justify-center gap-y-4">
              <Link href="/about" className="hover:bg-muted/50">
                About
              </Link>
              <Link href="/work">Work</Link>
              <Link href='/blog'>Blog</Link>
              <Link href="/contact" className="hover:bg-muted/50">
                Contact
              </Link>
              <Button
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <GoDesktopDownload /> Download my CV
              </Button>
            </nav>
          </div>
        )}
      </header>
    );
  }
  return (
    <header>
      <nav className="flex justify-between items-center w-full px-24 py-2 shadow-md bg-[#eee7d7]">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Aleksandra logo" width={108} height={36} />
          </Link>
        </div>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link
              href="/about"
              className="text-xl p-3 hover:bg-gradient-to-b from-muted/50 to-muted "
            >
              About
            </Link>
          </li>
          <li>
            <NavigationDropdown />
          </li>
          <li> <Link href='/blog' className="text-xl p-3 hover:bg-gradient-to-b from-muted/50 to-muted">Blog</Link></li>
          <li>
            <Link
              href="/contact"
              className="text-xl p-3 hover:bg-gradient-to-b from-muted/50 to-muted "
            >
              Contact
            </Link>

          </li>
        </ul>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-2"
        >
          <GoDesktopDownload /> Download my CV
        </Button>
      </nav>
    </header>
  );
};
export default Header;
