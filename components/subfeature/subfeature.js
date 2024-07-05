import Image from "next/image";

export function Subfeature(){
    return(
        <div className="flex-col py-[96px] px-[80px] bg-gray-50">
            <div className="flex justify-center">
            <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">About me</div>
            </div>

            <div className="flex gap-[70px] ">
                <div className="w-[584px] h-[694px]">
                    <div className="flex w-[440px] h-[520px] relative">
                    <Image className="absolute z-10 left-[40px]" src="/images/about.png" width={400} height={480}/>
                    <div className="bg-gray-200 w-[400px] h-[480px] absolute bottom-0"></div>
                    </div>
                </div>
                <div className="w-[584px] h-[694px] flex flex-col gap-4">
                    <div className="font-bold text-3xl mb-[24px]">Curious about me? Here you have it:</div>
                    <div>I'm a passionate, self-proclaimed designer who specializes in full stack development 
                        (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life.
                         User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</div>
                    <div>I began my journey as a web developer in 2015, and since then,
                         I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. 
                         Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, 
                         TypeScript, Nestjs, Tailwindcss, Supabase and much more.</div>
                    <div>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</div>
                    <div>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. 
                        You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</div>
                    <div>Finally, some quick bits about me.</div>
                    <div className="flex">
                        <div className="flex-1">
                            <ul className="list-disc ml-7">
                                <li>B.E. in Computer Engineering</li>
                                <li>Full time freelancer</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul className="list-disc">
                                <li>Avid learner</li>
                                <li>Aspiring indie hacker</li>
                            </ul>
                        </div>
                    </div>
                    <div>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</div>
                </div>
            </div>
        </div>
    );
}