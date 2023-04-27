import type { FC } from "react"
import Card from "./Card"
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


interface PrototypeSectionProps {
    title: string
    content: any[]
}

SwiperCore.use([Virtual, Navigation, Pagination]);


const PrototypeSection: FC<PrototypeSectionProps> = (props) => {
    const { title, content } = props

    return (
        <div className="bg-[#1D1D1D] flex justify-between rounded-[24px] py-[32px] px-[50px]">
            <div className="w-[280px] flex flex-col justify-center">
                <div className="text-[34px] font-bold">{title}</div>
                <div className="flex gap-2">
                    <div>Trending : </div>
                    <div className="underline cursor-pointer select-none">Fashion</div>
                </div>
                <button className="cursor-pointer w-36 mt-5 border-solid border-white hover:bg-[#272727] border-[1px] px-6 py-1 rounded-[64px] flex justify-center items-center font-light text-[16px]">Explore All</button>
            </div>
            <div className="w-[70%]">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation
                    virtual={false}
                >
                    {content.map((slideContent, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <Card key={index} content={slideContent} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PrototypeSection