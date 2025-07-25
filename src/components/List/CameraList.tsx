import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

const CameraList = () => {
  const data = [
    {
      place: "Shop Floor Camera A",
      problem: "Unauthorised Access",
      time: "14:35 - 14:37 on 7-Jul-2025",
      camera: "screens/list/Screenshot1.svg",
    },
    {
      place: "Shop Floor Camera A",
      problem: "Gun Threat",
      time: "14:35 - 14:37 on 7-Jul-2025",
      camera: "screens/list/Screenshot2.svg",
    },
    {
      place: "Shop Floor Camera A",
      problem: "Unauthorised Access",
      time: "14:35 - 14:37 on 7-Jul-2025",
      camera: "screens/list/Screenshot3.svg",
    },
    {
      place: "Shop Floor Camera A",
      problem: "Unauthorised Access",
      time: "14:35 - 14:37 on 7-Jul-2025",
      camera: "screens/list/Screenshot4.svg",
    },
    {
      place: "Shop Floor Camera A",
      problem: "Unauthorised Access",
      time: "14:35 - 14:37 on 7-Jul-2025",
      camera: "screens/list/Screenshot1.svg",
    },
  ];
  return (
    <div className="w-full px-[12px] pb-[24px] gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex py-1 pr-[12px] pl-1 gap-4 w-full">
          <div className="rounded-[6px] border-[1px] border-[#FFFFFF40] overflow-hidden">
            <Image
              src={item.camera}
              width={120}
              height={67}
              alt="Camera screens"
            />
          </div>
          <div className="flex flex-col justify-between h-[67px] w-[297px]">
            <div className="flex items-center gap-1">
              {item.problem === "Gun Threat" ? (
                <Image
                  src={"icons/list/gun.svg"}
                  width={16}
                  height={16}
                  alt="Gun threat"
                />
              ) : (
                <Image
                  src={"icons/list/locker.svg"}
                  width={16}
                  height={16}
                  alt="Unauthorised"
                />
              )}

              <h1 className="font-inter font-bold text-[12px]">
                {item.problem}
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Image
                  src="icons/navbar/camera.svg"
                  width={10}
                  height={10}
                  alt="location"
                />
                <p className="font-inter font-normal text-[10px]">
                  {item.place}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Clock width={10} height={10} />
                <h1 className="font-inter font-bold text-[10px]">
                  {item.time}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-[10px] px-[12px] text-[#FFCC00] h-fit">
            <h1 className="font-jakarta-sans font-bold text-[10px] ">
              Resolve
            </h1>
            <ChevronRight width={16} height={16} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CameraList;
