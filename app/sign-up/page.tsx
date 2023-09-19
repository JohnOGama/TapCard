import Button from "@/components/Button";
import Title from "@/components/Title";
import Key from "@/components/icons/Key";
import Person from "@/components/icons/Person";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Tap Card | Sign Up",
  description:
    "Tap Card is seamless card that can be used to business or personal usage",
};

export default function SignUp() {
  return (
    <div className="w-full bg-secondary h-screen flex pt-[250px] items-center flex-col gap-4">
      <Title className="text-primary text-4xl ">Sign Up</Title>
      <div className="grid grid-cols-2 gap-2">
        <input
          placeholder="First Name"
          className="bg-gray w-[170px] px-5 py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary"
        />
        <input
          placeholder="Last Name"
          className="bg-gray px-5 w-[170px] py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary"
        />
      </div>
      <div className="flex relative items-center">
        <input
          placeholder="Email Address"
          className="bg-gray px-5 w-[350px] py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary"
        />
        <Person color="#F1F1F1" width="21" className="absolute right-5" />
      </div>

      <div className="flex flex-col relative items-center">
        <input
          placeholder="Password"
          className="bg-gray px-5 w-[350px] py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary"
        />
        <Key
          color="#F1F1F1"
          width="21"
          className="absolute right-5 top-[10px]"
        />
      </div>

      <div className="flex flex-col relative items-center">
        <input
          placeholder="Confirm Password"
          className="bg-gray px-5 w-[350px] py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary"
        />
        <Key
          color="#F1F1F1"
          width="21"
          className="absolute right-5 top-[10px]"
        />
      </div>
      <Button variant="primary" className="w-[350px] mt-0">
        Sign Up
      </Button>
      <p className="text-primary">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
