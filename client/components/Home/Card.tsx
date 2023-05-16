import Image from "next/image";
import type { FC } from "react";
import SliderContext from "./slider/context";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { renderPathName } from "@/libs/convertPathName";
interface CardProps {
  content: any;
}

const Card: FC<CardProps> = (props) => {
  const { content } = props;
  const route = useRouter();

  return (
    <SliderContext.Consumer>
      {({ elementRef }: any) => (
        <div
          ref={elementRef}
          onClick={() => {
            route.push(`prompts/${renderPathName(content.name)}`);
          }}
          className="flex select-none flex-col items-center justify-center lg:mr-5"
        >
          <div>
            <div className="relative h-[220px] w-[250px] cursor-pointer rounded-t-[16px] bg-white">
              <Image fill src={content.img} alt={`${content.name}-img`} />
            </div>
            <div className="relative flex w-[250px] cursor-pointer flex-col gap-[4px] rounded-b-[16px] bg-[#242627] p-[12px]">
              <div className="truncate">{content.name}</div>
              <div className="font-extralight text-[#A2A4A6]">
                @{content.author}
              </div>
              <div className="flex justify-between">
                <div className="rounded-[24px] bg-[#393B3C] px-3 py-[6px] text-[12px]">
                  😃{content.model}
                </div>
                <div className="">
                  {content.price} {content.currency}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SliderContext.Consumer>
  );
};

export default Card;
