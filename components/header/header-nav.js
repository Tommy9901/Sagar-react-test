import { IoSunnyOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import profile from './../../pages/public/images/profile.png';

export function Nav(){
    return(
    <div>
        <div className="flex justify-between">
            <div className="font-[700] text-3xl ">{`<SS />`}</div>

            <div className="flex gap-12 px-[32px] py-[0] items-center">
                <div className="hidden lg:block">About</div>
                <div className="hidden lg:block">World</div>
                <div className="hidden lg:block">Testimonials</div>
                <div className="hidden lg:block">Contact</div>
                <div className="text-gray-500 hidden lg:block">|</div>

                <div className="flex gap-8 items-center">
                    <div className="hidden lg:block"><IoSunnyOutline /></div>
                    <button className="w-[136px] h-[36px] bg-[#111827] text-white rounded-[10px] hidden lg:block">Download</button>
                </div>
                <div className="lg:hidden">
                <IoMenu />
                </div>
            </div>
        
        </div>
    </div>
    );
}


export function Header(){
    return(
    <div className="flex py-[96px] justify-between ">
        <div className="flex-col w-[768px] h-[360px]">
            <div className="text-[60px] font-[700] mb-3">Hi, I'm Sagar</div>
            <div className="mb-[48px]">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
                 exceptional digital experiences that are fast, accessible, visually appealing, and responsive. 
                 Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </div>
            <div>
                <div>Ahmedabad, India</div>
                <div>Available for new projects</div>
            </div>
            <div>icon</div>
        </div>
        <div className="flex w-[400px] h-[360px]">
            <Image className="shadow-2xl" src={profile} width={280} height={320}/>
        </div>
    </div>
    );
}