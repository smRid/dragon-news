import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = ({ date = "Sunday, November 27, 2025" }) => {
  return (
    <header className="text-center pt-11 pb-8 space-y-3">
      <Image
        src={logo}
        width={420}
        height={70}
        alt="The Dragon News"
        className="mx-auto h-auto w-[330px] md:w-[420px]"
      />
      <p className="text-[15px] font-medium text-[#777777] md:text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[16px] font-semibold text-[#444444] md:text-[18px]">
        {date}
      </p>
    </header>
  );
};

export default Header;
