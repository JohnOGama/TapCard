"use client";
import { useState } from "react";

// components
import Button from "@/components/Button";
import ShopCart from "@/components/icons/ShopCart";
import MenuIcon from "@/components/icons/Menu";
import Times from "./icons/Times";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// libs
import { navbarLinks } from "@/lib/helper";

// framer
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./icons/Logo";

const menuVars = {
  close: {
    x: 200,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    x: 300,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const RightSide = () => (
  <div className="md:flex gap-5 items-center hidden">
    <Button
      className="border-2 border-primary mt-0 px-5 text-base font-bold uppercase md:text-xs lg:text-base"
      variant="primary"
    >
      <Link href="/sign-in"> Activate</Link>
    </Button>
    <Button
      className="border-2  border-primary mt-0 px-5 flex-shrink-0 text-base font-bold uppercase lg:text-base md:text-xs text-primary"
      variant="ghost"
    >
      <Link href="/sign-up"> Sign Up</Link>
    </Button>
    <div className=" relative bg-primary rounded-full h-9 w-9 flex items-center justify-center">
      <ShopCart className="cursor-pointer mt-1" width="24" color="black" />
      <span className="absolute bg-secondary text-xs text-center rounded-full text-primary h-5 w-5 -top-2 -right-2 ">
        0
      </span>
    </div>
  </div>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="bg-secondary p-5 w-full fixed top-0 z-10 ">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Link
          href="/"
          className="text-primary font-bold text-2xl"
          style={{ display: "flex" }}
        >
          <Logo width="160" height="50" variant="white" />
        </Link>
        <MenuIcon
          width="20"
          color="#F1F1F1"
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(true)}
        />
        <div className="hidden md:flex text-primary md:gap-6 lg:gap-14 lg:-ml-[120px] uppercase font-semibold lg:items-center md:text-sm lg:text-base">
          {navbarLinks.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className={`hover:text-yellow duration-300 `}
            >
              {link.text}
            </Link>
          ))}
        </div>
        {pathname === "/sign-in" || pathname === "/sign-up" ? (
          ""
        ) : (
          <RightSide />
        )}
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className=" md:hidden h-screen w-full  fixed top-0 right-0 bg-secondary/50  flex flex-col items-end pr-5 uppercase text-2xl font-semibold  "
          >
            <motion.div
              variants={menuVars}
              initial="close"
              animate="open"
              exit="exit"
              className="flex flex-col gap-3 text-right bg-primary pt-[100px] px-5  w-[50%] fixed top-0 right-0 h-screen"
            >
              <Times
                width="20"
                className="absolute top-8 right-5 cursor-pointer"
                onClick={() => setOpen(false)}
              />
              {navbarLinks.map((link, id) => (
                <Link
                  href={link.href}
                  key={id}
                  className={`hover:text-yellow duration-300 `}
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button
                className="mt-0 px-5 text-base font-bold uppercase"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                <Link href="/sign-in"> Activate</Link>
              </Button>
              <Button
                className="border-[1px]  border-secondary text-secondary mt-0 flex-shrink-0 text-base font-bold uppercase "
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                <Link href="/sign-up"> Sign Up</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
