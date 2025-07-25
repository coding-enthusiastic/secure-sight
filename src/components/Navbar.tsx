import Logo from "./Navbar/Logo";
import Titles from "./Navbar/Titles";
import User from "./Navbar/User";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between h-[76px] border-b-[1px] border-b-[#FFFFFF26] 
    pt-[16px] px-[24px] pb-[12px] w-full"
    >
      <div>
        <Logo />
      </div>
      <div>
        <Titles />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
