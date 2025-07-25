import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

const CameraViews = () => {
  const camera = [
    {
      name: "Camera - 02",
      img: "screens/list/Screenshot2.svg",
    },
    {
      name: "Camera - 02",
      img: "screens/list/Screenshot3.svg",
    },
  ];

  return (
    <div className="absolute bottom-1 right-1 z-10 flex justify-center gap-[12px] w-fit">
      {camera.map((e, index) => (
        <div
          key={index}
          className="w-[120px] h-[83px] rounded-[4px] overflow-hidden"
        >
          <div className="flex flex-row justify-between items-center bg-[#0B0B0B] px-[5px] py-[3.2px]">
            <h2 className="font-inter font-medium text-[8px]">{e.name}</h2>
            <EllipsisVertical width={10} height={10} />
          </div>
          <Image src={e.img} width={120} height={68} alt="Other camera" />
        </div>
      ))}
    </div>
  );
};

export default CameraViews;
