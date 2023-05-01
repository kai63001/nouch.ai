import Image from "next/image"
import { FC } from "react"

const Footer: FC = () => {
    return (
        <div className="mt-[150px]">
            <div className="w-full h-[1px] bg-[#ededed]" />
            <div className="flex flex-col lg:flex-row lg:justify-between mt-[30px] pb-[25px]">
                <div className="flex justify-center w-full lg:w-fit lg:justify-start" >
                    <Image width={100} height={40} src={'/icon/logo-nouch.svg'} alt={"logo-nouch-footer"} />
                </div>
                <div className="lg:flex lg:text-center gap-[24px]">
                    <div className="mt-[16px] flex gap-[24px] justify-center w-full lg:w-fit lg:justify-start">
                        <div className="whitespace-nowrap">Support</div>
                        <div className="whitespace-nowrap">Privacy policy</div>
                        <div className="whitespace-nowrap">Powered by Nouch.com</div>
                    </div>
                    <div className="mt-[32px] lg:mt-[0px] flex gap-[24px] justify-center w-full lg:justify-start">
                        <Image width={24} className="cursor-pointer" height={24} src={'/icon/facebook-logo.svg'} alt={"logo-nouch-footer"} />
                        <Image width={24} className="cursor-pointer" height={24} src={'/icon/twitter-logo.svg'} alt={"logo-nouch-footer"} />
                        <Image width={24} className="cursor-pointer" height={24} src={'/icon/instagram-logo.svg'} alt={"logo-nouch-footer"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer