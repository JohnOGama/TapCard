"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Person from "./icons/Person";
import Input from "./Input";
import Title from "./Title";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/api/auth/auth";
import { useMeStore } from "@/store/useMeStore";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const onForgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("send email reset");
    } catch (error: any) {
      if (error) {
        console.log("Invalid Email");
      }
    }
  };

  return (
    <form
      className="flex items-center flex-col gap-4"
      onSubmit={onForgetPassword}
    >
      <Title className="text-primary text-2xl md:text-2xl lg:text-3xl">
        Reset Your Password
      </Title>
      <p className="text-primary text-xs">
        Enter the email address associated with your account and we
        <br /> will send you a link to reset your password
      </p>
      <div className="flex relative items-center">
        <Input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Person color="#F1F1F1" width="21" className="absolute right-5" />
      </div>
      <Button variant="primary" className="w-[350px] mt-0" type="submit">
        Continue
      </Button>
      <p className="text-primary">
        Don&rsquo;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
