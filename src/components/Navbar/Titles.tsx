import Image from "next/image";

const Titles = () => {
  return (
    <div className="flex flex-row px-[12px] py-[10px] justify-between items-center gap-[16px]">
      <div className="flex flex-row gap-2">
        <Image
          src="/icons/navbar/dashboard.svg"
          width={16}
          height={16}
          alt="dashboard icon"
        />
        <h1 className="font-jakarta-sans font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-row px-[12px] py-[10px] gap-2">
        <Image
          src="/icons/navbar/camera.svg"
          width={16}
          height={16}
          alt="dashboard icon"
        />
        <h1 className="font-jakarta-sans font-bold">Cameras</h1>
      </div>
      <div className="flex flex-row px-[12px] py-[10px] gap-2">
        <Image
          src="/icons/navbar/scenes.svg"
          width={16}
          height={16}
          alt="dashboard icon"
        />
        <h1 className="font-jakarta-sans font-bold">Scenes</h1>
      </div>
      <div className="flex flex-row px-[12px] py-[10px] gap-2">
        <Image
          src="/icons/navbar/incidents.svg"
          width={16}
          height={16}
          alt="dashboard icon"
        />
        <h1 className="font-jakarta-sans font-bold">Incidents</h1>
      </div>
      <div className="flex flex-row px-[12px] py-[10px] gap-2">
        <Image
          src="/icons/navbar/users.svg"
          width={16}
          height={16}
          alt="dashboard icon"
        />
        <h1 className="font-jakarta-sans font-bold">Users</h1>
      </div>
    </div>
  );
};

export default Titles;
