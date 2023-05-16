import { FC, useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "../Home/slider/Slider";
import { useRouter } from "next/router";
import { renderPathName } from "@/libs/convertPathName";

interface SectionCardProps {
  title: string;
  content: any[];
  autoSlide?: boolean;
}

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay]);

const SectionCard: FC<SectionCardProps> = (props) => {
  const { title, content, autoSlide = false } = props;
  const [screenSize, setScreenSize] = useState(0);
  const route = useRouter();

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  return (
    <div>
      <div className="mb-8 flex justify-between">
        <h1 className="w-[150px] truncate text-[22px] font-bold md:w-full md:text-[32px]">
          {title}
        </h1>
        <button
          onClick={() => {
            route.push(`/prompts?category=${renderPathName(title, "+")}`);
          }}
          className=" flex h-[44px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[24px] border-[1px] border-solid border-white px-6 text-[12px] font-light hover:bg-[#272727] md:rounded-[64px] md:text-[16px]"
        >
          Explore All
        </button>
      </div>
      <div className="relative lg:w-full">
        {screenSize > 786 ? (
          <Slider>
            {content.map((slideContent, index) => (
              <Card key={index} content={slideContent} />
            ))}
          </Slider>
        ) : (
          <div className="flex overflow-x-scroll gap-[5px] scrollbar-hide">
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
