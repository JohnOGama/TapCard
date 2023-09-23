import React from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

// static data
import { FooterContent } from "@/data/StaticData";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full border-t-2 border-secondary py-16">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="lg:flex gap-[170px]">
          <div className="pb-16">
            <Title className="mb-0 md:text-3xl lg:text-4xl">
              COMPANY
              <br /> LOGO
            </Title>
            <Paragraph description="company@placeholder.com" />
            <Paragraph description="+123 456 789" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
            {FooterContent.map((item, index) => (
              <div key={index} className="text-secondary">
                <Title className="text-xl md:text-2xl lg:text-xl">
                  {item.title}
                </Title>
                <div className="flex flex-col gap-4">
                  {item.links?.map((link, index) => (
                    <Link
                      key={index}
                      className="text-base md:text-lg"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-5">
                  {item.socialMedia?.map((social, index) => (
                    <Image key={index} src={social.label} alt="social media" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
