import type { FC } from "react"
import Image from "next/image";

const HeroSection: FC = () => {
    return <div className="h-[calc(100vh-20vh)] flex items-center">
        <div className="flex w-full gap-[120px]">
            <div className="flex w-full justify-center items-center flex-col">
                <div className="w-full md:w-[50%] flex flex-col items-center md:items-start">
                    <div className="relative  w-[250px] h-[100px] md:w-[300px] md:h-[150px]">
                        <Image src={'/icon/logo-nouch.svg'} alt="background" fill />
                    </div>
                    <div className="w-[300px] md:w-[500px] text-[14px] md:text-[18px]">Explore top prompts, produce better results, discover the Nouch ecosystem
                        in one place.
                    </div>
                    <div className="flex md:w-[50%] gap-[25px] mt-6">
                        <button className="pt-[12px] pb-[12px] pl-[48px] pr-[48px] bg-[#E75065] hover:bg-[#c42a3f] rounded-[64px]">BUY</button>
                        <button className="pt-[12px] pb-[12px] pl-[48px] pr-[48px] bg-[#686868] hover:bg-[#494444] rounded-[64px]">SELL</button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full justify-center">
                <div className="relative flex justify-center w-[400px] h-[400px]">
                    <Image fill src={'/icon/mockImg.png'} alt={"mockImg"} />
                    <div className="absolute top-[25px] left-[0px] bg-white text-[#000000] translate-x-[-50%] font-semibold shadow-2xl pt-3 pb-3 pr-5 pl-5 rounded-[35px]">🤖 Midjourney</div>
                </div>
            </div>
        </div>
    </div>
}

export default HeroSection