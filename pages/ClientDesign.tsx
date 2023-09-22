import React from "react";

// components
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";

// static data
import { ClientCardDesc } from "@/data/StaticData";

// images
import TIKTOK from "@/public/tiktok.png";

export default function ClientDesign() {
  return (
    <div className="w-full bg-designBg">
      <div className="max-w-[1200px] mx-auto pb-10 lg:py-[50px]">
        <div className="px-[50px] lg:px-0 lg:flex lg:gap-10">
          <div className="flex flex-col items-center gap-5 lg:gap-6 lg:items-start lg:flex-1">
            <Title className="mb-0 pt-10 lg:text-4xl text-secondary">
              Client Card Designs Printed
            </Title>

            {ClientCardDesc.map((desc, index) => (
              <Paragraph
                key={index}
                description={desc.desc}
                className="lg:w-[500px] lg:text-xl text-secondary"
              />
            ))}
            <Button
              variant="secondary"
              rounded
              className="px-8 py-2 md:text-xl"
            >
              Try It Now!
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col gap-5 mt-4">
            <Image src={TIKTOK} alt="tiktok" />
          </div>
        </div>
      </div>
    </div>
  );
}
