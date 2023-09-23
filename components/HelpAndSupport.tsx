"use client";
import React, { useState } from "react";
import QuestionMark from "./icons/QuestionMark";
import Chat from "./icons/Chat";
import { AnimatePresence, motion } from "framer-motion";

export default function HelpAndSupport() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="fixed right-5 bottom-5 bg-secondary w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
      <QuestionMark
        color="white"
        width="30"
        height="30"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.2, stiffness: 200 },
            }}
            exit={{ opacity: 0, y: 0, transition: { duration: 0.2 } }}
            className="fixed bottom-[75px] right-10 bg-secondary flex flex-col  max-w-[300px]  rounded-md"
          >
            <div className="flex gap-5 hover:bg-primary/30 px-4 py-4">
              <Chat width="40" height="40" />
              <div className="text-primary capitalize">
                <h1 className="">talk to sales</h1>
                <p className="text-[14px]">
                  learn more about our paid plans and enterprise options.
                </p>
              </div>
            </div>
            <div className="flex gap-5 hover:bg-primary/30 px-4  py-4">
              <Chat width="40" height="40" />
              <div className="text-primary capitalize">
                <h1>talk to sales</h1>
                <p className="text-[14px]">
                  learn more about our paid plans and enterprise options.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </div>
  );
}
