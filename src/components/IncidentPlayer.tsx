import Image from "next/image";
import CameraViews from "./Player/CameraViews";
import { CalendarDays, Disc } from "lucide-react";

const IncidentPlayer = () => {
  return (
    <div
      className={`relative h-[450px] w-[796px] rounded-[6px] overflow-hidden`}
    >
      <Image
        src="/screens/player/Screenshot.svg"
        fill
        quality={100}
        alt="Camera screen"
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute top-1 left-1 z-10 w-fit h-fit flex flex-row items-center justify-center bg-[#1C1917] 
      rounded-[4px] py-[2px] pr-[8px] pl-[6px] gap-[4px]"
      >
        <CalendarDays width={12} height={12} color="gray" />

        <p className="font-dm-sans font-medium text-[12px]">
          11/7/2025 - 03:12:37
        </p>
      </div>
      <div
        className="absolute bottom-1 left-1 z-10 bg-[#0B0B0B] col-start-1 flex flex-row items-center gap-[4px]
      py-[2px] pr-[8px] pl-[10px] rounded-[4px] w-fit h-fit border border-[#404040]"
      >
        <Disc width={12} widths={12} color="red" />

        <p className="font-inter text-[14px] font-medium">Camera - 01</p>
      </div>
      <CameraViews />
    </div>
  );
};

export default IncidentPlayer;
