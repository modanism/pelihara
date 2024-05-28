"use client"

import { useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthProvider"; 
import { auth } from "@/utils/firebase"; 


const WithAuth = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { currentUser } = useAuth();

    useEffect(() => {
      if (!currentUser) {
        router.replace("/login");
      }
    }, [currentUser, router]);

    if (!currentUser) {
      return null; // or a loading spinner
    }

    return (<>{children}</>);

};

export default WithAuth;
