import Button from "@/components/Button";
import SignUpForm from "@/components/SignUpForm";
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
    <div className="w-full bg-secondary h-screen  pt-[250px]  ">
      <SignUpForm />
    </div>
  );
}
