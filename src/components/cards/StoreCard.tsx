import Image from "next/image";
import BadgeIcon from "../icons/BadgeIcon";
import CatImg from "@/assets/images/cat.png";
import PetShopImg from "@/assets/images/pet_shop.png";
import ArrowIcon from "../icons/ArrowIcon";
import StarIcon from "../icons/StarIcon";
import PetFoodIconImg from "@/assets/images/pet_food_icon.png";
import GroomingIconImg from "@/assets/images/grooming_icon.png";
import VetIconImg from "@/assets/images/vet_icon.png";

export default function StoreCard() {
  return (
    <div className="cursor-pointer rounded-xl flex flex-col w-[144px] shadow-md overflow-hidden mb-[10px]">
      <Image src={PetShopImg} alt="Pet Shop" style={{ objectFit: "contain" }} />

      <div className="w-full py-[16px] flex flex-col h-full items-center justify-center">
        <div className="flex items-center justify-start">
          <BadgeIcon />
          <p className="font-dm text-[11px] text-black">Ganesha Pet Shop</p>
        </div>
        <div className="flex items-center">
          <ArrowIcon />
          <p className="font-dm text-[11px] text-black">500 meter, Bandung</p>
        </div>
        <div className="flex items-center">
          <StarIcon />
          <p className="font-dm text-[11px] text-black">{"4.5 | "}</p>
          <div className="flex items-center justify-center gap-[3px]">
            <Image src={PetFoodIconImg} alt="Pet Food" />
            <Image src={GroomingIconImg} alt="Grooming" />
            <Image src={VetIconImg} alt="Vet" />
          </div>
        </div>
      </div>
    </div>
  );
}
