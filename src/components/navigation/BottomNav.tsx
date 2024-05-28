"use client";

import { useToast } from "@chakra-ui/react";
import ArticleIcon from "../icons/ArticleIcon";
import HomeIcon from "../icons/HomeIcon";
import NotificationIcon from "../icons/NotificationIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { useRouter, usePathname } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();

  const handleComingSoon = () => {
    toast({
      title: "This feature is coming soon!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <nav className="z-[10] rounded-t-xl shadow-[rgba(0,0,0,0.15)_1px_-3px_30px_-1px] bg-[#F9F9F9] absolute bottom-0 w-full flex gap-[24px] justify-center items-center h-[74px]">
      <div
        onClick={() => {
          router.push("/");
        }}
        className={`${
          pathname === "/" ? "border-t-[3px] border-green-300" : ""
        }  cursor-pointer h-full w-[44px] flex flex-col justify-center items-center`}
      >
        <HomeIcon color={pathname === "/" ? "#346E56" : "#BFBFBF"}/>
        <p
          className={`${
            pathname === "/" ? "text-green-300" : "text-[#BFBFBF]"
          } font-inter  text-[10px] font-[700]`}
        >
          Beranda
        </p>
      </div>
      <div
        onClick={handleComingSoon}
        className={`${
          pathname === "/article" ? "border-t-[3px] border-green-300" : ""
        }  cursor-pointer h-full w-[44px] flex flex-col justify-center items-center`}
      >
        <ArticleIcon />
        <p
          className={`${
            pathname === "/article" ? "text-green-300" : "text-[#BFBFBF]"
          } font-inter  text-[10px] font-[700]`}
        >
          {" "}
          Article
        </p>
      </div>
      <div
        onClick={handleComingSoon}
        className={`${
          pathname === "/notification" ? "border-t-[3px] border-green-300" : ""
        }  cursor-pointer h-full w-[44px] flex flex-col justify-center items-center`}
      >
        <NotificationIcon />
        <p
          className={`${
            pathname === "/notification" ? "text-green-300" : "text-[#BFBFBF]"
          } font-inter  text-[10px] font-[700]`}
        >
          Notifikasi
        </p>
      </div>
      <div
        onClick={() => {
          router.push("/profile");
        }}
        className={`${
          pathname === "/profile" ? "border-t-[3px] border-green-300" : ""
        }  cursor-pointer h-full w-[44px] flex flex-col justify-center items-center`}
      >
        <ProfileIcon color={pathname === "/profile" ? "#346E56" : "#BFBFBF"} />
        <p
          className={`${
            pathname === "/profile" ? "text-green-300" : "text-[#BFBFBF]"
          } font-inter  text-[10px] font-[700]`}
        >
          Profil
        </p>
      </div>
    </nav>
  );
}
