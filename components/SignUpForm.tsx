"use client";
import React, { useState } from "react";
import Key from "./icons/Key";
import Button from "./Button";
import Link from "next/link";
import Person from "./icons/Person";
import Title from "./Title";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/api/auth/auth";
import { useRouter } from "next/navigation";

interface UserFormData {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  Password: string;
  ConfirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const [user, setUser] = useState<any>();
  const [error, setError] = useState<any>({});

  const submit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.EmailAddress,
        data.Password
      );
      setUser(userCredential);
      await updateProfile(userCredential.user, { displayName: data.FirstName });
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      if (error.message) {
        setError("Email already exists");
      }
    }
  };

  return (
    <form
      className="flex items-center flex-col gap-4"
      onSubmit={handleSubmit(submit)}
    >
      <Title className="text-primary text-2xl md:text-2xl lg:text-3xl">
        Create a new account
      </Title>
      <div className="grid grid-cols-2 gap-2">
        <Input
          placeholder="First Name"
          className="w-[170px]"
          {...register("FirstName")}
        />
        <Input
          placeholder="Last Name"
          className="w-[170px]"
          {...register("LastName")}
        />
      </div>
      <div className="flex relative items-center">
        <Input placeholder="Email Address" {...register("EmailAddress")} />
        <Person color="#F1F1F1" width="21" className="absolute right-5" />
      </div>
      <div className="flex flex-col relative items-center">
        <Input placeholder="Password" {...register("Password")} />
        <Key
          color="#F1F1F1"
          width="21"
          className="absolute right-5 top-[10px]"
        />
      </div>

      <div className="flex flex-col relative items-center">
        <Input
          placeholder="Confirm Password"
          {...register("ConfirmPassword")}
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
    </form>
  );
};

export default SignUpForm;
