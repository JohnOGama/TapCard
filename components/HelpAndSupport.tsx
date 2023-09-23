"use client";
import React, { useState } from "react";
import QuestionMark from "./icons/QuestionMark";
import { AnimatePresence, motion } from "framer-motion";

import Book from "@/components/icons/Book";
import Circle from "@/components/icons/Circle";
import DualChat from "@/components/icons/DualChat";
import Chat from "@/components/icons/Chat";
import Headphone from "@/components/icons/Headphone";
import Star from "@/components/icons/Star";
import Times from "./icons/Times";
import Link from "next/link";

const HelpAndSupportItems = [
  {
    icon: <Book width={"30"} height="30" />,
    title: "Talk to sales",
    description: "Learn more about our paid plans and enterprise options.",
  },
  {
    icon: <Circle width="30" height="30" />,
    title: "Help & Knowledge",
    description: "Find help and video guides on all Builder features.",
  },
  {
    icon: <DualChat width="30" height="30" />,
    title: "Builder Community Forum",
    description:
      "Get technical assistance and support from the Builder community.",
  },
  {
    icon: <Chat width="30" height="30" />,
    title: "Contact Support",
    description: "Submit a ticket to get help from our dedicated Support team.",
  },
  {
    icon: <Headphone width="30" height="30" />,
    title: "Get expert help",
    description:
      "Submit a project request to connect with an Expert from our partner ecosystem.",
  },
  {
    icon: <Star width="30" height="30" />,
    title: "Feature Suggestion",
    description:
      "Add to our feature wishlist and upvote your favorite requests.",
  },
];

export default function HelpAndSupport() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="fixed z-10 right-5 bottom-5 bg-secondary w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center "
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <>
          <Times color="white" width="15" height="15" />
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", duration: 0.2, stiffness: 200 },
              }}
              exit={{ opacity: 0, y: 0, transition: { duration: 0.2 } }}
              className="fixed border-2 border-primary/30 bottom-[75px] right-10 bg-secondary flex flex-col  max-w-[300px]  rounded-md "
            >
              {HelpAndSupportItems.map((item, index) => (
                <Link
                  key={index}
                  href="/under-construction"
                  className="flex gap-5 hover:bg-primary/30 px-4 py-4 duration-200"
                >
                  {item.icon}
                  <div className="text-primary capitalize">
                    <h1 className="">{item.title}</h1>
                    <p className="text-[14px]">{item.description}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <QuestionMark color="white" width="30" height="30" />
      )}
    </div>
  );
}
