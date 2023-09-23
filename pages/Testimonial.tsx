import React from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Image from "next/image";

// static data
import { Testimonials } from "@/data/StaticData";

export default function Testimonial() {
  function Stars({ count }: { count: number }) {
    const starArray = Array.from({ length: count }, (_, index) => (
      <div key={index}>★</div>
    ));

    return <div className="flex text-yellow">{starArray}</div>;
  }
  return (
    <div className="w-full bg-bg2 h-auto bg-no-repeat bg-cover  py-10 bg-center opacity-90">
      <div className="max-w-[1200px] mx-auto ">
        <div className="pb-10 text-center">
          <Title className="text-primary text-2xl sm:text-3xl capitalize">
            Join our tap card community
          </Title>
          <Paragraph
            className="text-primary px-9"
            description="Take part, cultivate, and collaboration. More updates about this soon!"
          />
        </div>
        <div className="px-5 md:px-14 lg:flex lg:gap-5">
          {Testimonials.map((person, index) => (
            <div
              key={index}
              className="bg-primary flex flex-col mb-5 p-5 gap-5 rounded"
            >
              <div className="flex gap-5 items-center">
                <Image src={person.image} alt={person.name} />
                <div>
                  <Title className="text-lg mb-0 md:text-xl lg:text-xl">
                    {person.name}
                  </Title>
                  <Paragraph
                    description={person.role}
                    className="md:text-base lg:text-base"
                  />
                  <Stars count={person.star} />
                </div>
              </div>
              <div>
                <Paragraph description={person.desc} className="lg:text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
