import Image from "next/image";
import BadgeIcon from "../icons/BadgeIcon";
import CatImg from "@/assets/images/cat.png"

export default function ProductCard() {
  return (
    <div className="cursor-pointer rounded-xl flex flex-col w-[144px] h-[228px] shadow-md overflow-hidden mb-[10px]">
        <Image src={CatImg} alt="Cat Grooming" style={{objectFit: "contain"}}/>

      <div className="w-full p-[8px] flex flex-col h-full justify-between">
        <div>
          <div className="w-full flex items-center justify-between ">
            <p className="font-dm text-[14px] font-[500] text-black">
              Grooming Kutu
            </p>
            <span className="text-[14px]">&#128570;</span>
          </div>
          <p className="font-dm text-[16px] font-[700] text-black">Rp171.000</p>
        </div>
        <div className="flex items-center justify-start">
          <BadgeIcon />
          <p className="font-dm text-[11px] text-black">Pet shop ABC</p>
        </div>
      </div>
    </div>
  );
}
