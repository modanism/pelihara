"use client";

import PasswordInput from "@/components/input/PasswordInput";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import GoogleLogo from "@/assets/images/google_logo.png";
import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/utils/firebase";
import { FirebaseError } from "@firebase/util";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toast = useToast();
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast({
        title: "Signup successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error);
        
        toast({
          title: "Signup failed",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast({
        title: "Signup with Google successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push('/login');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast({
          title: "Signup with Google failed",
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
        <h1 className="text-green-200 text-[36px] font-jkt font-bold">
          Sign Up
        </h1>
        <FormControl>
          <FormLabel textColor={"black"}>Nama</FormLabel>
          <Input
            className="border-none"
            backgroundColor={"#EEEDF0"}
            textColor={"#777676"}
            placeholder="Masukkan nama"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
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
          <FormLabel textColor={"black"}>No.Handphone</FormLabel>
          <Input
            className="border-none"
            backgroundColor={"#EEEDF0"}
            textColor={"#777676"}
            placeholder="Masukkan email"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textColor={"black"}>Password</FormLabel>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textColor={"black"}>Konfirmasi Password</FormLabel>
          <PasswordInput
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </FormControl>
        <Button
          backgroundColor={"#5A8F7B"}
          textColor={"white"}
          fontSize={"16px"}
          height={"48px"}
          borderRadius={"22px"}
          className="w-full font-inter"
          onClick={handleSignup}
        >
          Sign Up
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
          onClick={handleGoogleSignup}

        >
          <Image src={GoogleLogo} alt="Google Logo" />
          <p>Daftar dengan Google</p>
        </Button>
        <div className="w-full flex justify-start gap-[5px]">
          <p className="text-black">Sudah punya akun?</p>
          <Link href={"/login"} className="text-green-200 font-[600]">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
