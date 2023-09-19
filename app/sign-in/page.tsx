import Button from "@/components/Button";
import Title from "@/components/Title";
import Key from "@/components/icons/Key";
import Person from "@/components/icons/Person";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Tap Card | Sign In",
  description:
    "Tap Card is seamless card that can be used to business or personal usage",
};

export default function SignIn() {
  return (
    <div className="w-full bg-secondary h-screen flex pt-[250px] items-center flex-col gap-4">
      <Title className="text-primary text-4xl ">Sign In</Title>

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
        <Link
          href="#"
          className=" text-right w-full text-primary/30 hover:underline duration-300"
        >
          Forget Password?
        </Link>
      </div>

      <Button variant="primary" className="w-[350px] mt-0">
        Sign In
      </Button>
      <p className="text-primary">
        Don't have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
