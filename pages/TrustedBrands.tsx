import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function TrustedBrands() {
  const logosDirectory = path.join(process.cwd(), "public/Brands logo");

  const imageFiles = fs.readdirSync(logosDirectory);

  return (
    <div className="hidden lg:block w-full py-[80px]">
      <div className="max-w-[1200px] mx-auto text-center capitalize">
        {imageFiles.map((image, index) => (
          <Image
            key={index}
            src={`/${image}`}
            alt="logos"
            width={20}
            height={20}
          />
        ))}
      </div>
    </div>
  );
}
