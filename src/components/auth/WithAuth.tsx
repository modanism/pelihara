"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthProvider";
import { Spinner } from "@chakra-ui/react";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.replace("/login");
    }
  }, [currentUser, loading, router]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center bg-gray-700">
        <div className="relative bg-white flex flex-col items-center justify-center w-screen mobile:w-[440px] gap-[20px] h-screen">
          <Spinner size={'xl'} thickness="4px" color="#89BFAB" />
        </div>
      </main>
    ); // or a loading spinner component
  }

  if (!currentUser) {
    return null; // or a loading spinner component
  }

  return <>{children}</>;
};

export default WithAuth;
