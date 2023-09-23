"use client";

import Title from "@/components/Title";
import UnderConstructionIcon from "@/components/icons/UnderConstructionIcon";
import Link from "next/link";

import React from "react";

export default function UnderConstruction() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] h-screen mx-auto flex flex-col justify-center items-center text-center px-5 ">
        <UnderConstructionIcon width="200" />
        <Title className="mb-0 mt-10">Under Construction</Title>
        <p>
          We are currently working on something amazing. Please check back
          later!
        </p>
        <p>
          Back to{" "}
          <Link href={"/"} className="underline">
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
