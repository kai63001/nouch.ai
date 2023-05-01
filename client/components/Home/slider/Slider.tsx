import useSlider from "./useSlider";
import useSizeElement from "./useSizeElement";
import React from "react";
import SliderContext from "./context";
import Image from "next/image";

const Slider = ({ children, activeSlide }: any) => {
  const { width, elementRef } = useSizeElement();
  //create context
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSlider(width, React.Children.count(children));

  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <div className="group">
        <div className="overflow-hidden">
          <div
            className="flex duration-500"
            {...slideProps}
            ref={containerRef}
          >
            {children}
          </div>
        </div>
        {hasNext && (
          <div
            className="absolute hidden group-hover:flex right-0 top-1/2 select-none w-[40px] h-[40px] bg-white items-center justify-center rounded-full cursor-pointer translate-y-[-50%] z-[10]"
            onClick={handleNext}
          >
            <Image
              width={10}
              height={15}
              src={"/icon/arrow-left.svg"}
              alt="arrow-left"
            />
          </div>
        )}
        {hasPrev && (
          <div
            className="absolute hidden group-hover:flex left-0 top-1/2 rotate-180 select-none w-[40px] h-[40px] bg-white items-center justify-center rounded-full cursor-pointer translate-y-[-50%] z-[10]"
            onClick={handlePrev}
          >
            <Image
              width={10}
              height={15}
              src={"/icon/arrow-left.svg"}
              alt="arrow-left"
            />
          </div>
        )}
      </div>
    </SliderContext.Provider>
  );
};

export default Slider;
