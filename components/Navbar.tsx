import Link from "next/link";
import Button from "@/components/Button";
import ShopCart from "@/components/icons/ShopCart";
import MenuIcon from "@/components/icons/Menu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-secondary p-5 w-full fixed top-0">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/" className="text-primary font-bold text-2xl">
          LOGO
        </Link>
        <MenuIcon
          width="20"
          color="#F1F1F1"
          className="cursor-pointer lg:hidden"
        />
        <div className="hidden lg:flex text-primary gap-14 ml-16 uppercase font-semibold lg:items-center">
          <Link href="#" className="hover:text-yellow duration-300">
            about
          </Link>
          <Link href="#" className="hover:text-yellow duration-300">
            services
          </Link>
          <Link href="#" className="hover:text-yellow duration-300">
            shop
          </Link>
          <Link href="#" className="hover:text-yellow duration-300">
            blogs
          </Link>
        </div>
        {pathname === "/sign-in" || pathname === "/sign-up" ? (
          ""
        ) : (
          <div className="lg:flex gap-5 items-center hidden">
            <Button
              className="border-2 border-primary mt-0 px-5 text-base font-bold uppercase"
              variant="primary"
            >
              <Link href="/sign-in"> Activate</Link>
            </Button>
            <Button
              className="border-2  border-primary mt-0 px-5 flex-shrink-0 text-base font-bold uppercase text-primary"
              variant="ghost"
            >
              <Link href="/sign-up"> Sign Up</Link>
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
        )}
      </nav>
    </div>
  );
}
