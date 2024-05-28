"use client";

import PasswordInput from "@/components/input/PasswordInput";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import GoogleLogo from "@/assets/images/google_logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebase";
import { FirebaseError } from "@firebase/util";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleEmailPasswordLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast({
        title: "Login successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast({
          title: "Login failed",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast({
        title: "Login with Google successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast({
          title: "Login with Google failed",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-700">
      <div className="bg-white flex flex-col items-center w-screen mobile:w-[440px] gap-[20px] h-screen pt-[70px] px-[32px]">
        <h1 className="text-green-200 text-[36px] font-jkt font-bold">Login</h1>

        <FormControl>
          <FormLabel textColor={"black"}>Email</FormLabel>
          <Input
            className="border-none"
            backgroundColor={"#EEEDF0"}
            textColor={"#777676"}
            placeholder="Masukkan email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textColor={"black"}>Password</FormLabel>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText textColor={"#EB0F0F"}>Lupa password?</FormHelperText>
        </FormControl>
        <Button
          backgroundColor={"#5A8F7B"}
          textColor={"white"}
          fontSize={"16px"}
          height={"48px"}
          borderRadius={"22px"}
          className="w-full font-inter"
          onClick={handleEmailPasswordLogin}
        >
          Login
        </Button>
        <Button
          backgroundColor={"white"}
          borderWidth={"2px"}
          borderColor={"#5A8F7B"}
          textColor={"#5A8F7B"}
          fontSize={"16px"}
          height={"48px"}
          borderRadius={"22px"}
          className="w-full font-inter gap-[8px]"
          onClick={handleGoogleLogin}
        >
          <Image src={GoogleLogo} alt="Google Logo" />
          <p>Masuk dengan Google</p>
        </Button>
        <div className="w-full flex justify-start gap-[5px]">
          <p className="text-black">Belum punya akun?</p>
          <Link href={"/signup"} className="text-green-200 font-[600]">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
