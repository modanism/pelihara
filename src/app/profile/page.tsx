"use client";

import WithAuth from "@/components/auth/WithAuth";
import BottomNav from "@/components/navigation/BottomNav";
import { auth } from "@/utils/firebase";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";

const Profile = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // router.replace("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  return (
    <WithAuth>
      <main className="flex min-h-screen flex-col items-center bg-gray-700">
        <div className="relative bg-white flex flex-col items-center w-screen mobile:w-[440px] gap-[20px] h-screen pt-[40px] px-[32px]">
          <BottomNav />

          <h1 className="text-green-200 text-[36px] font-jkt font-bold">
            Profile
          </h1>
          <p className="text-black text-[14px] font-inter">Pelihara</p>
          <Button
            backgroundColor={"#5A8F7B"}
            textColor={"black"}
            fontSize={"16px"}
            height={"48px"}
            borderRadius={"22px"}
            className="w-full "
            onClick={handleSignOut}
          >
            <p className="font-inter text-white">Sign Out</p>
          </Button>
        </div>
      </main>
    </WithAuth>
  );
};

export default Profile;
