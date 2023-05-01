import { FC, useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "../Home/slider/Slider";

interface SectionCardProps {
  title: string;
  content: any[];
  autoSlide?: boolean;
}

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay]);

const SectionCard: FC<SectionCardProps> = (props) => {
  const { title, content, autoSlide = false } = props;
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h1 className="truncate w-[150px] md:w-full font-bold text-[22px] md:text-[32px]">
          {title}
        </h1>
        <button className=" cursor-pointer whitespace-nowrap border-solid border-white hover:bg-[#272727] border-[1px] px-6 rounded-[24px] md:rounded-[64px] h-[44px] flex justify-center items-center font-light md:text-[16px] text-[12px]">
          Explore All
        </button>
      </div>
      <div className="relative">
        {screenSize > 786 ? (
          <Slider>
            {content.map((slideContent, index) => (
              <Card key={index} content={slideContent} />
            ))}
          </Slider>
        ) : (
          <div className="flex overflow-x-scroll">
            {content.map((slideContent, index) => (
              <Card key={index} content={slideContent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionCard;
