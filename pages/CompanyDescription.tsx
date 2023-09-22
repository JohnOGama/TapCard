import React from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

// static data
import { Descriptiion } from "@/data/StaticData";

export default function CompanyDescription() {
  return (
    <div className="w-full h-auto bg-bg1 bg-no-repeat  bg-cover">
      <div className="max-w-[1200px] mx-auto p-[50px] lg:py-[200px] lg:p-0">
        <div className="text-primary">
          <Title className="lg:text-4xl">
            Empowering Connections, One Card at a Time
          </Title>
          <div className="flex flex-col gap-5 lg:gap-6 mt-5">
            {Descriptiion.map((desc, index) => (
              <Paragraph
                key={index}
                description={desc.desc}
                className="lg:pr-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
