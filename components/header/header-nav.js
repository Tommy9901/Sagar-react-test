import { IoSunnyOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
// import profile from './../../pages/public/images/profile.png';
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { FaFigma } from "react-icons/fa6";

export function Nav() {
  return (
    <div className="flex justify-between  px-[80px]">
      <div className="font-[700] text-3xl ">{`<SS />`}</div>

      <div className="flex gap-[24px] px-[32px] py-[0] items-center">
        <div className="hidden lg:block">About</div>
        <div className="hidden lg:block">World</div>
        <div className="hidden lg:block">Testimonials</div>
        <div className="hidden lg:block">Contact</div>
        <div className="text-gray-500 hidden lg:block">|</div>

        <div className="flex gap-8 items-center">
          <div className="hidden lg:block">
            <IoSunnyOutline />
          </div>
          <button className="w-[136px] h-[36px] bg-[#111827] text-white rounded-[10px] hidden lg:block">
            Download
          </button>
        </div>
        <div className="lg:hidden">
          <IoMenu />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="md:flex py-[96px] gap-[48px] px-[80px] ">
      <div className="flex-col max-w-[768px] max-h-[360px]">
        <div className="text-[60px] font-[700] mb-[8px]">Hi, I'm Sagar</div>
        <div className="mb-[48px] font-[Inter] text-base">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </div>

        <div className="mb-[48px]">
          <div className="flex gap-2">
            <IoLocationOutline /> Ahmedabad, India
          </div>
          <div className="flex items-center gap-3 ml-1">
            <div className="bg-[#10B981] w-[10px] h-[10px] rounded-md"></div>
            Available for new projects
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <FiGithub className="w-[18px] h-[30px]" />
          </div>
          <div>
            <TfiTwitter className="w-[18px] h-[30px]" />
          </div>
          <div>
            <FaFigma className="w-[16px] h-[20px]" />
          </div>
        </div>
      </div>
      <div className=" max-w-[440px] max-h-[360px]">
        <div className="relative w-[280px] h-[320px]">
          <Image
            fill
            className="shadow-2xl w-full"
            src={"/images/profile.png"}
          />
          {/* <div className="bg-gray-200 w-[280px] h-[320px] absolute bottom-2 right-[10px]"></div> */}
        </div>
      </div>
    </div>
  );
}
