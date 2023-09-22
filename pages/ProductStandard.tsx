import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

// images
import Image from "next/image";
import Button from "@/components/Button";

// static data
import { ProductStandards } from "@/data/StaticData";

export default function ProductStandard() {
  return (
    <div className="w-full bg-standardBg py-12 lg:pb-[150px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center pb-10">
          <Title className="mb-2 text-secondary">
            Your Ultimate Security <br className="md:hidden" />
            Solution
            <br className="hidden md:block" /> For Unparalleled
            <br className="md:hidden" /> Utility
          </Title>
          <Paragraph
            description="Unmatched Utility and Security in One Card"
            className="text-secondary"
          />
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:my-10 md:mx-5 justify-center">
          {ProductStandards.map((prod, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-primary/70 justify-center p-4 w-[300px] h-[200px]  shadow-md rounded lg:h-auto lg:w-[500px] lg:py-[40px] text-center"
            >
              <Image src={prod.img} alt={prod.title} />
              <Title className="text-xl mt-4 md:text-lg lg:text-xl">
                {prod.title}
              </Title>
              <Paragraph
                description={prod.description}
                className="hidden lg:block  lg:text-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant="secondary"
            className="py-2 px-8 rounded lg:text-2xl lg:py-3"
          >
            Experience Tap Card
          </Button>
        </div>
      </div>
    </div>
  );
}
