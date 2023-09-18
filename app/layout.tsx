import MenuIcon from "@/components/icons/Menu";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Button from "@/components/Button";
import ShopCart from "@/components/icons/ShopCart";

const inter = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tap Card",
  description:
    "Tap Card is seamless card that can be used to business or personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <div className="bg-secondary p-5 w-full">
          <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
            <h1 className="text-primary font-bold text-2xl">LOGO</h1>
            <MenuIcon
              width="20"
              color="#F1F1F1"
              className="cursor-pointer lg:hidden"
            />
            <div className="hidden lg:flex text-primary gap-14 ml-16 uppercase font-semibold lg:items-center">
              <Link href="#" className="">
                about
              </Link>
              <Link href="#" className="">
                services
              </Link>
              <Link href="#" className="">
                shop
              </Link>
              <Link href="#" className="">
                blogs
              </Link>
            </div>
            <div className="lg:flex gap-5 items-center hidden">
              <Button
                className="border-2 border-primary mt-0 px-5 text-base font-bold uppercase"
                variant="primary"
              >
                Active
              </Button>
              <Button
                className="border-2  border-primary mt-0 px-7 flex-shrink-0 text-base font-bold uppercase text-primary"
                variant="ghost"
              >
                Sign Up
              </Button>
              <div className=" relative bg-primary rounded-full h-9 w-9 flex items-center justify-center">
                <ShopCart
                  className="cursor-pointer mt-1"
                  width="24"
                  color="black"
                />
                <span className="absolute bg-secondary text-xs text-center rounded-full text-primary h-5 w-5 -top-2 -right-2 ">
                  0
                </span>
              </div>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
