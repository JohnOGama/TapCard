"use client";
import Link from "next/link";
import Button from "@/components/Button";
import ShopCart from "@/components/icons/ShopCart";
import MenuIcon from "@/components/icons/Menu";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/lib/helper";
import { useState } from "react";
import Times from "./icons/Times";
import { motion, AnimatePresence } from "framer-motion";

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

const staggerMenuVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
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
    <div className="bg-secondary p-5 w-full fixed top-0 z-10">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/" className="text-primary font-bold text-2xl">
          LOGO
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
            variants={menuVars}
            initial="close"
            animate="open"
            exit="exit"
            className=" md:hidden h-screen  fixed top-0 right-0 bg-primary w-[50%] flex flex-col items-end pr-5 uppercase text-2xl font-semibold pt-[100px] gap-2"
          >
            <Times
              width="20"
              className="absolute top-8 right-5 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <motion.div
              variants={staggerMenuVars}
              initial="initial"
              animate="open"
              className="flex flex-col gap-3 text-right"
            >
              {navbarLinks.map((link, id) => (
                <Link
                  href={link.href}
                  key={id}
                  className={`hover:text-yellow duration-300 `}
                >
                  {link.text}
                </Link>
              ))}
            </motion.div>
            <div className="flex flex-col gap-3 mt-3 ">
              <Button
                className="mt-0 px-5 text-base font-bold uppercase"
                variant="secondary"
              >
                <Link href="/sign-in"> Activate</Link>
              </Button>
              <Button
                className="border-2  border-secondary text-secondary mt-0 px-4 flex-shrink-0 text-base font-bold uppercase "
                variant="ghost"
              >
                <Link href="/sign-up"> Sign Up</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
