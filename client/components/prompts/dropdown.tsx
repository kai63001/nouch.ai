import Image from "next/image"
import type { FC } from "react"

const Dropdown: FC = () => {
    return (
        <div className="flex py-[14px] px-[24px] border border-white gap-[16px] rounded-[64px] cursor-pointer active:bg-slate-800 select-none">
            <div className="text-[16px]">Recently added</div>
            <Image src='/icon/arrow-down.svg' alt='arrow-left' width={20} height={20} className="" />
        </div>
    )
}

export default Dropdown