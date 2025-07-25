import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 p-2 ">
      <div className="w-[32px] h-[32px] ">
        <Image src="/user/image.svg" width={32} height={32} alt="User image" />
      </div>
      <div className="block ">
        <h1 className="font-dm-sans text-[14px] font-semibold">
          Mohammed Ajhas
        </h1>
        <p className="font-dm-sans text-[12px] font-normal">
          ajhas@mandlac.com
        </p>
      </div>
      <ChevronDown width={16} height={16}/>
    </div>
  );
};

export default User;
