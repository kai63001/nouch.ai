import { FC, useCallback, useEffect, useRef, useState } from "react"
import Card from "./Card"
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";


interface SectionCardProps {
    title: string
    content: any[]
    autoSlide?: boolean
}

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay]);


const SectionCard: FC<SectionCardProps> = (props) => {
    const { title, content, autoSlide = false } = props
    const [screemSize, setScreemSize] = useState(0)

    useEffect(() => {
        setScreemSize(window.innerWidth)
    }, [screemSize])

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)


    return (
        <div>
            <div className="flex justify-between mb-8">
                <h1 className="truncate w-[150px] md:w-full font-bold text-[22px] md:text-[32px]">{title}</h1>
                <button className=" cursor-pointer whitespace-nowrap border-solid border-white hover:bg-[#272727] border-[1px] px-6 rounded-[24px] md:rounded-[64px] h-[44px] flex justify-center items-center font-light md:text-[16px] text-[12px]">Explore All</button>
            </div>
            <div className="relative group">
                <div ref={navigationPrevRef}>
                    <div className="lg:hidden group-hover:flex select-none w-[40px] h-[40px] bg-white  items-center justify-center rounded-full rotate-180 cursor-pointer absolute left-0 top-[50%] translate-y-[-50%] translate-x-[calc(100%+16px)] z-[10]">
                        <Image width={10} height={15} src={'/icon/arrow-left.svg'} alt="arrow-left" />
                    </div>
                </div>
                <Swiper
                    autoplay={autoSlide ? {
                        delay: 5000,
                        disableOnInteraction: false,
                    } : false}
                    loop
                    slidesPerView={screemSize < 1000 ? 1 : 5}
                    spaceBetween={10}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    virtual={false}
                >
                    {content.map((slideContent, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <Card key={index} content={slideContent} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={navigationNextRef} >
                    <div className="lg:hidden group-hover:flex select-none w-[40px] h-[40px] bg-white items-center justify-center rounded-full cursor-pointer absolute right-0 top-[50%] translate-y-[-50%] translate-x-[calc(-100%-16px)] z-[10]">
                        <Image width={10} height={15} src={'/icon/arrow-left.svg'} alt="arrow-left" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SectionCard