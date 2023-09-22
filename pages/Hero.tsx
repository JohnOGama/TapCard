import Image from "next/image";
import CardBlack from "@/public/Cards/black.png";
import Link from "next/link";

// components
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="w-full bg-secondary">
      <div className="h-screen md:h-auto  max-w-[1200px] mx-auto md:pb-40 lg:pb-16 ">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-14 pt-20">
          <Image
            src={CardBlack}
            alt="blackCard"
            quality={100}
            placeholder="blur"
            className="sm:w-[420px] md:w-[560px] lg:w-[650px] lg:-ml-20"
          />
          <div className="text-center lg:text-left text-primary  md:-mt-16">
            <Title className="md:mb-5 lg:text-left lg:mb-2 lg:text-4xl">
              Seamless Connections, <br />
              One Tap Away!
            </Title>
            <Paragraph
              description="Effortless NFC Scanning for Instant Connections!"
              className="text-sm md:text-base lg:text-left lg:text-lg text-primary"
            />
            <Button
              rounded
              variant="primary"
              className="md:px-10 md:py-2 md:text-lg md:font-bold lg:px-5 lg:py-1"
            >
              <Link href="/sign-in">Try It Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
