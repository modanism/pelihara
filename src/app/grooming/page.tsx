"use client";

import WithAuth from "@/components/auth/WithAuth";
import BottomNav from "@/components/navigation/BottomNav";
import Image from "next/image";
import PeliharaLogo from "@/assets/images/pelihara_logo.png";
import PetFoodImg from "@/assets/images/pet_food.png";
import GroomImg from "@/assets/images/grooming.png";
import VetImg from "@/assets/images/vet.png";

import { useToast } from "@chakra-ui/react";
import PlusButton from "@/components/buttons/PlusButton";
import SlickCarousel from "@/components/carousel/SlickCarousel";
import NextIcon from "@/components/icons/NextIcon";
import ProductCarousel from "@/components/carousel/ProductCarousel";

const Grooming = () => {
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
    <WithAuth>
      <main className="flex min-h-screen flex-col items-center bg-gray-700">
        <div className="relative bg-white flex flex-col items-center w-screen mobile:w-[440px] pb-[100px] gap-[20px] h-screen overflow-y-scroll hide-scrollbar">
          <div className="w-full bg-[#A0CABB] min-h-[164px] relative px-[16px] flex flex-col justify-center items-center gap-[6px]">
            <div className="w-full">
              <Image src={PeliharaLogo} alt="Pelihara Logo" />
            </div>
            <div className="w-full">
              <h1 className="text-[24px] font-jkt font-[700] text-green-300 z-[3]">
                Peliharaanmu mau Perawatan apa?
              </h1>
            </div>

            <div className="absolute bottom-[-20%] border-[1px] border-green-200 flex gap-[22px] bg-white z-[2] justify-center items-center px-[16px] py-[10px] rounded-[18px]">
              <div className="flex justify-center items-center gap-[5px]">
                <span className="text-[31px]">&#128570;</span>
                <span className="text-[31px]">&#128054;</span>
              </div>
              <p className="font-dm text-[16px] text-green-200 font-[500]">
                Tambahkan profil peliharaanmu!
              </p>
              <PlusButton onClick={handleComingSoon} />
            </div>
            <svg
              className="absolute right-0 z-[1]"
              xmlns="http://www.w3.org/2000/svg"
              width="154"
              height="164"
              viewBox="0 0 154 164"
              fill="none"
            >
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0609 26.0571C21.7745 -3.3862 47.2642 -15.2858 67.7819 -33.6815C86.3751 -50.3516 102.639 -76.1637 125.149 -76.2311C147.414 -76.2978 165.909 -54.459 181.84 -34.0232C195.434 -16.5847 197.579 9.60033 208.196 30.3009C223.766 60.6583 257.967 78.2981 258.222 114.903C258.473 150.919 234.667 184.643 209.368 198.519C185.442 211.642 160.13 187.383 134.439 182.796C115.004 179.325 96.0186 182.846 77.3492 174.946C52.2614 164.33 21.7244 159.357 8.41685 129.467C-5.17015 98.9498 -0.545607 57.9545 11.0609 26.0571Z"
                fill="url(#paint0_linear_236_3516)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_236_3516"
                  x1="11.2247"
                  y1="15.9222"
                  x2="269.55"
                  y2="69.7214"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CFEFE3" />
                  <stop offset="1" stop-color="#346E55" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full  pt-[32px]">
            <div className="w-full flex justify-between mb-[13px] px-[16px]">
              <p className="font-dm text-[12px] font-[400] text-green-300">
                Rekomendasi Produk
              </p>
              <div className="cursor-pointer flex items-center justify-center">
                <p className="font-dm text-[12px] font-[500] text-green-normal">
                  Lihat Selengkapnya
                </p>
                <NextIcon />
              </div>
            </div>
            <div className="w-full ">
              <ProductCarousel />
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between mb-[13px] px-[16px]">
              <p className="font-dm text-[12px] font-[400] text-green-300">
                Rekomendasi Produk
              </p>
              <div className="cursor-pointer flex items-center justify-center">
                <p className="font-dm text-[12px] font-[500] text-green-normal">
                  Lihat Selengkapnya
                </p>
                <NextIcon />
              </div>
            </div>
            <div className="w-full ">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </main>
    </WithAuth>
  );
};

export default Grooming;
