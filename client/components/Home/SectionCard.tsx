import { FC, useRef, useState } from "react"
import Card from "./Card"
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


interface SectionCardProps {
    title: string
    content: any[]
}

SwiperCore.use([Virtual, Navigation, Pagination]);

const SectionCard: FC<SectionCardProps> = (props) => {
    const { title, content } = props

    return (
        <div>
            <div className="flex justify-between mb-8">
                <h1 className="font-bold text-[32px]">{title}</h1>
                <button className="cursor-pointer border-solid border-white hover:bg-[#272727] border-[1px] px-6 py-1 rounded-[64px] felx justify-center items-center font-light text-[16px]">Explore All</button>
            </div>
            <Swiper
                slidesPerView={5}
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
    )
}

export default SectionCard