import Image from "next/image"
import type { FC } from "react"

interface CardProps {
    content: any
}

const Card: FC<CardProps> = (props) => {
    const { content } = props
    return (
        <div onClick={() => {
            console.log(content.name.toString());
        }} className="select-none">
            <div className="cursor-pointer relative w-[250px] rounded-t-[16px] h-[220px] bg-teal-700">
                <Image fill src={content.img} alt={`${content.name}-img`} />
            </div>
            <div className="cursor-pointer relative flex flex-col gap-[4px] w-[250px] rounded-b-[16px] bg-[#242627] p-[12px]">
                <div className="truncate">{content.name}</div>
                <div className="font-extralight text-[#A2A4A6]">@{content.author}</div>
                <div className="flex justify-between">
                    <div className="px-3 py-[6px] bg-[#393B3C] rounded-[24px] text-[12px]">😃{content.model}</div>
                    <div className="">{content.price} {content.currency}</div>
                </div>
            </div>
        </div>
    )
}

export default Card