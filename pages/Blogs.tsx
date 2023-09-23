import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import React from "react";
import { BlogsContent } from "@/data/StaticData";
import Image from "next/image";
import Button from "@/components/Button";

export default function Blogs() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto py-16 px-8">
        <div className="text-center pb-16">
          <Title className="text-3xl">
            Crafting the Future of
            <br className="sm:hidden" /> Card Business
          </Title>
          <Paragraph
            className="px-12"
            description="Driven by Passion and Innovation Redesigning the Way We Connect and Transact"
          />
        </div>
        <div className="flex flex-col   gap-10 lg:grid lg:grid-cols-2 ">
          {BlogsContent.map((blog, index) => (
            <>
              <div className="flex flex-col items-start  gap-2 sm:px-[80px] md:px-[130px] md:mx-auto lg:pr-6 lg:px-0 ">
                <Image src={blog.image} alt={blog.title} />
                <Title className="text-lg mb-0 md:text-lg lg:text-lg">
                  {blog.title}
                </Title>
                <Paragraph
                  description={blog.desc}
                  className="text-sm md:text-base lg:text-base"
                />
                <Button className="text-secondary/80 p-0 mt-0 text-md  w-[80px]">
                  Read More
                </Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
