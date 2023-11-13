"use client";
import React, { useState, useEffect } from "react";
import Key from "./icons/Key";
import Link from "next/link";
import Button from "./Button";
import Person from "./icons/Person";
import Title from "./Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/api/auth/auth";
import Input from "./Input";
import { useRouter, redirect } from "next/navigation";
import { useMeStore } from "@/store/useMeStore";
import { toast } from "react-toastify";

const SignInForm: React.FC = () => {
  const { isLogin, isUserLogin, isRegister } = useMeStore((state) => state);
  const [user, setUser] = useState<any>();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const SignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);

      if (user.operationType === "signIn") {
        toast.success("success login", {
          position: "bottom-left",
          theme: "dark",
        });
        isUserLogin({ isLogin: true });
      }
      console.log("user is login", isLogin);
      setIsLoading(false);
    } catch (error: any) {
      if (error.message) {
        toast.error("Authentication Invalid", {
          position: "bottom-left",
          theme: "dark",
        });
      }
    }
  };

  useEffect(() => {
    if (isLogin) {
      console.log("sign in: Log in", isLogin);
      redirect("/");
    }
  }, [isLogin]);

  return (
    <form className="flex items-center flex-col gap-4" onSubmit={SignIn}>
      <Title className="text-primary text-2xl md:text-2xl lg:text-3xl">
        Sign in your account
      </Title>
      <div className="flex relative items-center">
        <Input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Person color="#F1F1F1" width="21" className="absolute right-5" />
      </div>
      <div className="flex flex-col relative items-center">
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Key
          color="#F1F1F1"
          width="21"
          className="absolute right-5 top-[10px]"
        />
        <Link
          href="/forget-password"
          className=" text-right w-full text-primary/30 hover:underline duration-300"
        >
          Forget Password?
        </Link>
      </div>

      <Button
        variant="primary"
        className={`w-[350px] mt-0 ${isLoading && "bg-primary/80"}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sign in..." : "Sign In"}
      </Button>
      <p className="text-primary">
        Don&rsquo;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
