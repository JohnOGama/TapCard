import Image from "next/image";
import React from "react";

//static data
import BCARD from "@/public/Cards/gray.png";

export default function AddToCart() {
  return (
    <div className="absolute -bottom-[350px] h-[300px] w-[400px] bg-standardBg shadow-xl   p-5 ">
      <div className="relative flex ">
        <Image
          src={BCARD}
          alt="card"
          width={200}
          className="absolute top-[-50px]"
        />
        <h1>Professional Card</h1>
      </div>
    </div>
  );
}
