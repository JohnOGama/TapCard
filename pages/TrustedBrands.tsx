import React from "react";
import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import Title from "@/components/Title";

interface Props {
  imageFilenames: string[];
}

export default async function TrustedBrands() {
  const imageDirectory = path.join(process.cwd(), "/public/Brands logo");
  const imageFilenames = await fs.readdir(imageDirectory);
  return (
    <div className="hidden lg:block w-full">
      <div className="max-w-[1200px] mx-auto py-16">
        <Title className="capitalize text-center mb-16 text-secondary">
          Brands that trust tap Card
        </Title>
        <div className="grid grid-cols-6 gap-10">
          {imageFilenames?.map((logo, index) => (
            <Image
              key={index}
              src={`/Brands logo/${logo}`}
              alt="logo"
              width={120}
              height={120}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
