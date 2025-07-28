import { Data } from "@/interface/types";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import { sampleData } from "./SampleData";

const CameraList = async (props: Data) => {
  const dbData = Object.values(props);
  const data = dbData.length > 0 ? dbData : sampleData;

  function dateTime(a: Date, b: Date) {
    const tS = new Date(a);
    const tE = new Date(b);

    const timeStart = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(tS);

    const timeEnd = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(tE);

    const dateStart = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(tS);
    const dateEnd = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(tE);

    return (
      <div>
        <h1 className="font-inter font-bold text-[10px]">
          {dateStart === dateEnd
            ? `${timeStart} - ${timeEnd} on ${dateStart}`
            : `${timeStart} on ${dateStart} - ${timeEnd} on ${dateEnd}`}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full px-[12px] pb-[24px] gap-4">
      {data.map((item, index) => (
        <div key={index}>
          {item.incidents.map((e, index) => (
            <div key={index} className="flex py-1 pr-[12px] pl-1 gap-4 w-full">
              <div className="rounded-[6px] border-[1px] border-[#FFFFFF40] overflow-hidden">
                <Image
                  src={e.thumbnailUrl}
                  width={120}
                  height={67}
                  alt="Camera screens"
                />
              </div>

              <div className="flex flex-col justify-between h-[67px] w-[297px]">
                <div className="flex items-center gap-1">
                  {e.type === "Gun Threat" ? (
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

                  <h1 className="font-inter font-bold text-[12px]">{e.type}</h1>
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
                      {item.location} <span>{item.name}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock width={10} height={10} />
                    {dateTime(e.tsStart, e.tsEnd)}
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
      ))}
    </div>
  );
};

export default CameraList;
