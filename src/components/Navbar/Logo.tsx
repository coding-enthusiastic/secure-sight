import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center w-[126px] h-[26px] gap-[8px]">
        <Image src="/logo.svg" width={20} height={26} alt="logo" />
      <h1 className="font-jakarta-sans text-base font-normal">
        MANDLAC<span className="font-jakarta-sans text-base font-extrabold">X</span>
      </h1>
    </div>
  );
};

export default Logo;
