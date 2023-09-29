import { Metadata } from "next";
import React from "react";
import SignInForm from "@/components/SignInForm";

export const metadata: Metadata = {
  title: "Tap Card | Sign In",
  description:
    "Tap Card is seamless card that can be used to business or personal usage",
};

export default function SignIn() {
  return (
    <div className="w-full bg-secondary h-screen pt-[250px]">
      <SignInForm />
    </div>
  );
}
