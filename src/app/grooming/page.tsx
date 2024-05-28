"use client";

import WithAuth from "@/components/auth/WithAuth";
import BottomNav from "@/components/navigation/BottomNav";
import Image from "next/image";
import PeliharaLogo from "@/assets/images/pelihara_logo.png";
import PetFoodImg from "@/assets/images/pet_food.png";
import GroomImg from "@/assets/images/grooming.png";
import VetImg from "@/assets/images/vet.png";

import {
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import PlusButton from "@/components/buttons/PlusButton";
import SlickCarousel from "@/components/carousel/SlickCarousel";
import NextIcon from "@/components/icons/NextIcon";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import StoreCarousel from "@/components/carousel/StoreCarousel";
import SearchIcon from "@/components/icons/SearchIcon";

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
          <div className="w-full bg-gradient-to-b from-[#89BFAB] to-white min-h-[164px] relative px-[16px] flex flex-col justify-center items-center gap-[6px]">
            <div className="w-full">
              <Image src={PeliharaLogo} alt="Pelihara Logo" />
            </div>
            <div className="w-full">
              <h1 className="text-[24px] font-jkt font-[700] text-green-300">
                Peliharaanmu mau Perawatan apa?
              </h1>
            </div>

            <div className="absolute bottom-[-25%] shadow-md flex gap-[8px] flex-col bg-white z-[2] justify-center items-center px-[16px] py-[10px] rounded-[18px]">
              <p className="font-dm text-[11px] text-blackfont-[500]">
                Temukan banyak produk berkualitas untuk hewan peliharaanmu!
              </p>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  className="border-none"
                  backgroundColor={"#EEEDF0"}
                  textColor={"#777676"}
                  type="text"
                  placeholder="Cari disini"
                />
              </InputGroup>
            </div>
          </div>
          <div className="w-full pt-[64px] px-[16px] flex items-center justify-between">
            <p className="font-dm text-[14px] font-[700] text-black">Lokasi</p>
            <p className="font-dm text-[14px] font-[400] text-black">
              Jl. Ganesa No.10, Lb. Siliwa...
            </p>
            <p
              onClick={handleComingSoon}
              className="cursor-pointer font-dm text-[14px] font-[700] text-green-200"
            >
              Atur alamat
            </p>
          </div>
          <div className="w-full pt-[16px] px-[16px] flex items-center justify-evenly">
            <div className="flex items-center justify-center gap-[16px]">
              <div className="w-[54px] h-[54px] rounded-[50%] bg-[#89bfab33] border-[1px] border-green-200 flex items-center justify-center">
                <span className="text-[31px]">&#128570;</span>
              </div>
              <p className="font-dm text-[12px] font-[400] text-black">
                Kucing
              </p>
            </div>
            <div className="flex items-center justify-center gap-[16px]">
              <div className="w-[54px] h-[54px] rounded-[50%] bg-[#89bfab33] border-[1px] border-green-200 flex items-center justify-center">
                <span className="text-[31px]">&#128054;</span>
              </div>
              <p className="font-dm text-[12px] font-[400] text-black">
                Anjing
              </p>
            </div>
          </div>
          <div className="w-full pt-[24px]">
            <div className="w-full flex justify-between mb-[13px] px-[16px]">
              <p className="font-dm text-[12px] font-[400] text-green-300">
                Toko Terdekat
              </p>
              <div
                className="cursor-pointer flex items-center justify-center"
                onClick={handleComingSoon}
              >
                <p className="font-dm text-[12px] font-[500] text-green-normal">
                  Lihat Selengkapnya
                </p>
                <NextIcon />
              </div>
            </div>
            <div className="w-full ">
              <StoreCarousel />
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full flex justify-between mb-[13px] px-[16px]">
              <p className="font-dm text-[12px] font-[400] text-green-300">
                Rekomendasi Produk
              </p>
              <div
                className="cursor-pointer flex items-center justify-center"
                onClick={handleComingSoon}
              >
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
