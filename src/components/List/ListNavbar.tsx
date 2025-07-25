import {
  AlertTriangle,
  CheckCheck,
  DoorOpen,
  Plus,
  UserSearch,
} from "lucide-react";

const ListNavbar = () => {
  return (
    <div className="flex flex-row items-center gap-[4px] w-full p-4">
      <div className="h-fit">
        <div className="flex justify-center items-center w-6 h-6 bg-[#7F1D1D] border-2 border-[#450A0A] rounded-[16px]">
          <AlertTriangle width={12} height={12} color="#F87171" />
        </div>
      </div>
      <div className="flex flex-row justify-between gap-[6px] w-full">
        <h1 className="font-jakarta-sans font-semibold text-[18px]">
          15 Unresolved Incidents
        </h1>
        <div className="flex flex-row items-center gap-[3px]">
          <div className="flex flex-row gap-[-3px]">
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#431407] rounded-[16px]">
              <DoorOpen width={12} height={12} color="#F97316" className="-scale-x-100"/>
            </div>
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#450A0A] rounded-[16px]">
              <Plus width={12} height={12} color="#EF4444" />
            </div>
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#172554] rounded-[16px]">
              <UserSearch width={12} height={12} color="#3B82F6" />
            </div>
          </div>

          <div className="flex flex-row items-center px-[8px] gap-1 h-fit border rounded-[16px]">
            <CheckCheck width={12} height={12} color="#22C55E" />
            <p className="font-dm-sans font-medium text-[12px]">
              4 resolved incidents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNavbar;
