


export function Work(){
    return(
        <div className="flex flex-col gap-[48px] py-[96px] px-[80px]">
            <div>
                <div className="flex items-center justify-center text-center mb-[16px]">
                    <div className="bg-gray-200 w-[75px] h-[28px] rounded-lg">Skill</div>
                </div>
                <div className="text-xl font-normal text-center text-gray-600">The skills, tools and technologies I am really good at:</div>
            </div>
            <div className="flex flex-col gap-[48px] ">
                <div className="flex justify-between">
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                    <div><img src="/images/Tech.png" alt="tech" /></div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                        <div><img src="/images/Tech.png" alt="tech" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Experience(){
    return(
        <div className="flex flex-col py-[96px] px-[80px] gap-[48px] bg-gray-50">
            <div>
                <div className="flex items-center justify-center text-center">
                    <div className="bg-gray-200 w-[115px] h-[28px] rounded-lg">Experience</div>
                </div>
                <div className="text-xl font-normal text-center mt-[16px] text-gray-600">Here is a quick summary of my most recent experiences:</div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-6 p-[32px] justify-between bg-[#ffffff] shadow-lg w-[896px] h-[288px] rounded">
                    <div>
                        <img src="/images/upwork.png" alt="logo" />
                    </div>
                    <div className=" flex-col">
                        <div className="font-bold text-2xl mb-[16px]"> Sr. Frontend Developer</div>
                        <div>
                            <ul className="list-disc ml-4 gap-[4px] text-gray-600">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                <li>Sed quis justo ac magna.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-gray-600">Nov 2021 - Present</div>
                </div>
            


            
                
            </div>
        </div>
    );
}