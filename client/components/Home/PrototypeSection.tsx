import { FC, useEffect, useState } from "react";
import Card from "./Card";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface PrototypeSectionProps {
  title: string;
  content: any[];
}

SwiperCore.use([Virtual, Navigation, Pagination]);

const PrototypeSection: FC<PrototypeSectionProps> = (props) => {
  const { title, content } = props;
  const [screemSize, setScreemSize] = useState(0);

  useEffect(() => {
    setScreemSize(window.innerWidth);
  }, [screemSize]);

  return (
    <div className="hidden justify-between rounded-[24px] bg-[#1D1D1D] px-[50px] py-[32px] lg:flex">
      <div className="flex w-[280px] flex-col justify-center">
        <div className="text-[34px] font-bold">{title}</div>
        <div className="flex gap-2">
          <div>Trending : </div>
          <div className="cursor-pointer select-none underline">Fashion</div>
        </div>
        <button className="mt-5 flex w-36 cursor-pointer items-center justify-center rounded-[64px] border-[1px] border-solid border-white px-6 py-1 text-[16px] font-light hover:bg-[#272727]">
          Explore All
        </button>
      </div>
      <div className="w-[70%]">
        <Swiper slidesPerView={3} spaceBetween={10} navigation virtual={false}>
          {content.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <Card key={index} content={slideContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PrototypeSection;
