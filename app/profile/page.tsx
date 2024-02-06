"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

//image
import PROFILE from "@/public/profile.jpg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useMeStore } from "@/store/useMeStore";
import {
  onAuthStateChanged,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/api/auth/auth";
import { redirect, useRouter } from "next/navigation";

interface UserFormData {
  FirstName?: string | null;
  LastName?: string | null;
  EmailAddress?: string | null;
  Password?: string | null;
  ConfirmPassword?: string | null;
  DisplayName?: string | null;
  isVerified?: boolean | null;
}

export default function Profile() {
  const router = useRouter();
  const { isLogin, isUserLogin } = useMeStore((state) => state);

  const [userProfile, setUserProfile] = useState<UserFormData>({
    DisplayName: "",
    EmailAddress: "",
    Password: "Password",
    ConfirmPassword: "Password",
    isVerified: false,
  });

  // console.log("up", userProfile);

  // console.log("auth", auth.currentUser);
  useEffect(() => {
    if (!isLogin) {
      redirect("/sign-in");
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      onAuthStateChanged(auth, (user) => {
        setUserProfile({
          DisplayName: user?.displayName,
          EmailAddress: user?.email,
          isVerified: user?.emailVerified,
        });
      });
    } else {
      isUserLogin({ isLogin: false });
      redirect("/");
    }
    if (userProfile.DisplayName && userProfile.EmailAddress) {
      isUserLogin({ isLogin: true });
    }
  }, [isLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { currentUser } = auth;

    try {
      await updateProfile(currentUser!, {
        displayName: userProfile.DisplayName,
      });
      router.replace("/");
    } catch (error) {}
  };

  const handleFieldChange = (fieldName: string, value: string | boolean) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [fieldName]: value,
    }));
  };

  return (
    <div className="w-full  h-screen pt-[100px] ">
      <div className="max-w-[1200px] mx-auto">
        <Title className="pt-0">Profile</Title>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex justify-center items-center flex-col">
            <Image
              src={PROFILE}
              width={80}
              alt="placeholder"
              className="rounded-full object-cover "
            />
            <h1>{userProfile.isVerified ? "check symbol" : ""}</h1>
            <h1>Upload A New Profile</h1>
            <Button variant="secondary">Upload</Button>
          </div>
          <div className="px-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1>Display Name</h1>
              <input
                value={userProfile.DisplayName ?? ""}
                className="w-full py-2 px-2"
                onChange={(e) =>
                  handleFieldChange("DisplayName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Email Address</h1>
              <input
                value={userProfile.EmailAddress ?? ""}
                className="w-full py-2 px-2"
                onChange={(e) =>
                  handleFieldChange("EmailAddress", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Password</h1>
              <input
                className="w-full py-2 px-2"
                type="password"
                value={userProfile.Password ?? "Password"}
                onChange={(e) => handleFieldChange("Password", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Confirm Password</h1>
              <input
                className="w-full py-2 px-2"
                type="password"
                value={userProfile.ConfirmPassword ?? "Password"}
                onChange={(e) =>
                  handleFieldChange("ConfirmPassword", e.target.value)
                }
              />
            </div>
            <Button variant="secondary" className="py-2" type="submit">
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
