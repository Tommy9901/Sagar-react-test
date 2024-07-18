import Image from "next/image";

export function Work(){
   const tools = [
    {
        title: title,
        text: text,
        buttons: item1, item2, item3,
        icon: icon,
    }
   ]
    return(
        <div className="flex flex-col gap-[48px] py-[96px] px-[80px]">
            <div className="flex flex-col text-center items-center">
                <div className="bg-gray-200 w-[115px] h-[28px] rounded-lg">Work</div>
                <div className="text-xl font-normal text-center mt-[16px] text-gray-600">Some of the noteworthy projects I have built:</div>
            </div>
            <div className="flex px-[64px]">
                <div className=" p-12  bg-gray-100 rounded-lg">
                    <Image src="/images/work.png"
                    width={480}
                    height={384}/>
                
                </div>
                <div className="flex flex-col">
                    <div className="px-12 pt-12 pb-[100px]">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}