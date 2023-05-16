import { FC, useEffect, useState } from "react";
import { MOCK_CHATGPT_PROMT, MOCK_POPULAR_PROMT } from "../mock";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import Layout from "@/components/Layout";
import StarsRating from "react-star-rate";
import Slider from "../../components/Home/slider/Slider";
import { Card, SectionCard } from "@/components/Home";

const quicksand = Quicksand({
  weight: "600",
  subsets: ["latin"],
});

const PromptDetail: FC = () => {
  const [isLike, setIsLike] = useState(false);
  const [value, setValue] = useState<number | undefined>(0);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  const Detail = [
    {
      img: "/icon/mockImg.png",
      name: "John Doe",
      rate: 3.5,
      create_at: new Date(),
      text: "amazing design!",
    },
    {
      img: "/icon/mockImg.png",
      name: "Cop Huper",
      rate: 3,
      create_at: new Date(),
      text: "Design in this case is both practical and aesthetically pleasing, nice job!",
    },
  ];

  const content = MOCK_POPULAR_PROMT.content;

  return (
    <Layout>
      <div className="pt-[85px] lg:px-[150px]">
        <div className="grid grid-cols-[50%_40%] gap-[10%]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[15px]">
                <Image
                  className="rounded-[100%]"
                  width={40}
                  height={40}
                  src={"/icon/mockImg.png"}
                  alt="mockImg.svg"
                />
                <div className="self-center text-[18px] font-semibold">
                  {"john"} {"doe"}
                </div>
              </div>
              <div className="text-[18px] font-semibold">ABC</div>
            </div>
            <div className={`text-[32px] font-bold ${quicksand.className}`}>
              Lorem ipsum dolor sit amet consect.
            </div>
            <div className="text-[16px] font-thin">
              Elit dolor amet quis ipsum occaecat. Fugiat adipisicing amet
              nostrud adipisicing enim commodo ut consectetur adipisicing fugiat
              incididunt. Est reprehenderit sint laborum deserunt pariatur
              veniam magna Lorem esse tempor aliquip ad velit. Ipsum sunt aute
              deserunt id magna. Quis adipisicing laboris ipsum ipsum eiusmod
              laborum. Cupidatat tempor magna culpa elit pariatur nostrud culpa.
            </div>
            <div className="w-fit rounded-[24px] bg-[#393B3C] px-3 py-[6px] text-[12px] font-semibold">
              😃{"Midjourney"}
            </div>
            <div className="flex gap-[32px]">
              <div className="flex items-center gap-[12px]">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.975 19.575C11.675 19.875 11.3125 20.025 10.8875 20.025C10.4625 20.025 10.1 19.875 9.8 19.575L0.425 10.2C0.258333 10.0333 0.145833 9.85833 0.0875 9.675C0.0291667 9.49167 0 9.3 0 9.1V1.5C0 1.06667 0.141667 0.708333 0.425 0.425C0.708333 0.141667 1.06667 0 1.5 0H9.1C9.3 0 9.5 0.0291667 9.7 0.0875C9.9 0.145833 10.0833 0.258333 10.25 0.425L19.575 9.75C19.8917 10.0667 20.05 10.4375 20.05 10.8625C20.05 11.2875 19.8917 11.6583 19.575 11.975L11.975 19.575ZM4.125 5.4C4.475 5.4 4.77917 5.27083 5.0375 5.0125C5.29583 4.75417 5.425 4.45 5.425 4.1C5.425 3.75 5.29583 3.44583 5.0375 3.1875C4.77917 2.92917 4.475 2.8 4.125 2.8C3.775 2.8 3.47083 2.92917 3.2125 3.1875C2.95417 3.44583 2.825 3.75 2.825 4.1C2.825 4.45 2.95417 4.75417 3.2125 5.0125C3.47083 5.27083 3.775 5.4 4.125 5.4Z"
                    fill="white"
                  />
                </svg>
                <div>{"50"}</div>
              </div>
              <div className="flex items-center gap-[12px]">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.003 11.75C12.1843 11.75 13.1875 11.3365 14.0125 10.5096C14.8375 9.6826 15.25 8.67843 15.25 7.49705C15.25 6.31568 14.8365 5.3125 14.0096 4.4875C13.1826 3.6625 12.1784 3.25 10.9971 3.25C9.81568 3.25 8.8125 3.66348 7.9875 4.49045C7.1625 5.3174 6.75 6.32157 6.75 7.50295C6.75 8.68432 7.16348 9.6875 7.99045 10.5125C8.8174 11.3375 9.82157 11.75 11.003 11.75ZM10.9941 10.3C10.2147 10.3 9.55417 10.0272 9.0125 9.48163C8.47083 8.93603 8.2 8.27353 8.2 7.49413C8.2 6.71471 8.47279 6.05417 9.01837 5.5125C9.56397 4.97083 10.2265 4.7 11.0059 4.7C11.7853 4.7 12.4458 4.97279 12.9875 5.51837C13.5292 6.06397 13.8 6.72647 13.8 7.50587C13.8 8.28529 13.5272 8.94583 12.9816 9.4875C12.436 10.0292 11.7735 10.3 10.9941 10.3ZM11 15C8.56667 15 6.36667 14.3083 4.4 12.925C2.43333 11.5417 0.966667 9.73333 0 7.5C0.966667 5.26667 2.43333 3.45833 4.4 2.075C6.36667 0.691667 8.56667 0 11 0C13.4333 0 15.6333 0.691667 17.6 2.075C19.5667 3.45833 21.0333 5.26667 22 7.5C21.0333 9.73333 19.5667 11.5417 17.6 12.925C15.6333 14.3083 13.4333 15 11 15Z"
                    fill="white"
                  />
                </svg>
                <div>{"1.4k"}</div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div
                  onClick={() => {
                    setIsLike(!isLike);
                  }}
                >
                  {isLike ? (
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 40 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 36.9498L17.95 35.0998C14.4167 31.8665 11.5 29.0748 9.2 26.7248C6.9 24.3748 5.06667 22.2748 3.7 20.4248C2.33333 18.5748 1.375 16.8998 0.825 15.3998C0.275 13.8998 0 12.3831 0 10.8498C0 7.8498 1.00833 5.34147 3.025 3.3248C5.04167 1.30814 7.53333 0.299805 10.5 0.299805C12.4 0.299805 14.1583 0.749805 15.775 1.6498C17.3917 2.5498 18.8 3.8498 20 5.5498C21.4 3.7498 22.8833 2.4248 24.45 1.5748C26.0167 0.724805 27.7 0.299805 29.5 0.299805C32.4667 0.299805 34.9583 1.30814 36.975 3.3248C38.9917 5.34147 40 7.8498 40 10.8498C40 12.3831 39.725 13.8998 39.175 15.3998C38.625 16.8998 37.6667 18.5748 36.3 20.4248C34.9333 22.2748 33.1 24.3748 30.8 26.7248C28.5 29.0748 25.5833 31.8665 22.05 35.0998L20 36.9498Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.16 2.60981C18.0983 1.54782 16.6907 0.90214 15.1932 0.790195C13.6957 0.67825 12.2078 1.10748 11 1.99981C9.72766 1.05345 8.14399 0.624325 6.56792 0.798851C4.99185 0.973377 3.54044 1.73859 2.50597 2.9404C1.47151 4.14221 0.930823 5.69133 0.992802 7.27583C1.05478 8.86032 1.71482 10.3625 2.84 11.4798L10.29 18.9298C10.383 19.0235 10.4936 19.0979 10.6154 19.1487C10.7373 19.1995 10.868 19.2256 11 19.2256C11.132 19.2256 11.2627 19.1995 11.3846 19.1487C11.5064 19.0979 11.617 19.0235 11.71 18.9298L19.16 11.4798C19.7427 10.8975 20.2049 10.2062 20.5202 9.44518C20.8356 8.6842 20.9979 7.86854 20.9979 7.04481C20.9979 6.22108 20.8356 5.40542 20.5202 4.64445C20.2049 3.88347 19.7427 3.19209 19.16 2.60981V2.60981ZM17.75 10.0698L11 16.8098L4.25 10.0698C3.65518 9.47251 3.24998 8.71286 3.08523 7.88615C2.92049 7.05945 3.00353 6.2025 3.32395 5.42281C3.64437 4.64312 4.1879 3.97541 4.88635 3.50344C5.58479 3.03147 6.40706 2.77625 7.25 2.76981C8.37611 2.77257 9.4551 3.22215 10.25 4.01981C10.343 4.11354 10.4536 4.18794 10.5754 4.23871C10.6973 4.28947 10.828 4.31561 10.96 4.31561C11.092 4.31561 11.2227 4.28947 11.3446 4.23871C11.4664 4.18794 11.577 4.11354 11.67 4.01981C12.4883 3.3107 13.5455 2.93896 14.6275 2.97984C15.7096 3.02072 16.7357 3.47116 17.4982 4.24C18.2607 5.00884 18.7026 6.03865 18.7345 7.121C18.7664 8.20335 18.3859 9.2574 17.67 10.0698H17.75Z"
                        fill="#F5F9FF"
                      />
                    </svg>
                  )}
                </div>
                <div>{"1.4k"}</div>
              </div>
              <div className="flex cursor-pointer items-center gap-[8px] rounded-[16px] border border-white px-[10px] py-[5px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10.6666C13.5076 10.6699 13.0221 10.7821 12.5783 10.9954C12.1346 11.2086 11.7435 11.5176 11.4333 11.8999L7.18334 9.9416C7.38316 9.32972 7.38316 8.67014 7.18334 8.05827L11.4333 6.09993C11.9347 6.7049 12.6336 7.11333 13.4068 7.25313C14.18 7.39293 14.9777 7.25512 15.6591 6.86402C16.3406 6.47292 16.862 5.85366 17.1313 5.11555C17.4006 4.37744 17.4005 3.56792 17.1311 2.82986C16.8616 2.09179 16.3401 1.47264 15.6586 1.08166C14.9771 0.690677 14.1793 0.55301 13.4062 0.692952C12.6331 0.832894 11.9342 1.24145 11.4329 1.84651C10.9317 2.45157 10.6603 3.21425 10.6667 3.99993C10.6692 4.19846 10.6887 4.39641 10.725 4.5916L6.325 6.6166C5.8559 6.15791 5.26187 5.84786 4.61734 5.72529C3.97281 5.60272 3.30644 5.67307 2.70171 5.92754C2.09699 6.18201 1.58081 6.60928 1.21784 7.15582C0.854868 7.70235 0.661255 8.34385 0.661255 8.99993C0.661255 9.65602 0.854868 10.2975 1.21784 10.844C1.58081 11.3906 2.09699 11.8179 2.70171 12.0723C3.30644 12.3268 3.97281 12.3971 4.61734 12.2746C5.26187 12.152 5.8559 11.842 6.325 11.3833L10.725 13.4083C10.6887 13.6035 10.6692 13.8014 10.6667 13.9999C10.6667 14.6592 10.8622 15.3037 11.2284 15.8518C11.5947 16.4 12.1153 16.8272 12.7244 17.0795C13.3335 17.3318 14.0037 17.3978 14.6503 17.2692C15.2969 17.1406 15.8909 16.8231 16.357 16.357C16.8232 15.8908 17.1407 15.2968 17.2693 14.6502C17.3979 14.0036 17.3319 13.3334 17.0796 12.7243C16.8273 12.1152 16.4001 11.5946 15.8519 11.2284C15.3037 10.8621 14.6593 10.6666 14 10.6666ZM14 2.33327C14.3296 2.33327 14.6519 2.43101 14.926 2.61415C15.2 2.79729 15.4137 3.05758 15.5398 3.36213C15.6659 3.66667 15.699 4.00178 15.6346 4.32508C15.5703 4.64838 15.4116 4.94536 15.1785 5.17844C14.9454 5.41153 14.6485 5.57027 14.3252 5.63457C14.0019 5.69888 13.6667 5.66588 13.3622 5.53973C13.0577 5.41359 12.7974 5.19996 12.6142 4.92588C12.4311 4.6518 12.3333 4.32957 12.3333 3.99993C12.3333 3.55791 12.5089 3.13398 12.8215 2.82142C13.1341 2.50886 13.558 2.33327 14 2.33327V2.33327ZM4 10.6666C3.67037 10.6666 3.34813 10.5689 3.07405 10.3857C2.79997 10.2026 2.58635 9.94228 2.4602 9.63774C2.33406 9.33319 2.30105 8.99808 2.36536 8.67478C2.42967 8.35148 2.5884 8.05451 2.82149 7.82142C3.05458 7.58833 3.35155 7.4296 3.67485 7.36529C3.99815 7.30098 4.33327 7.33399 4.63781 7.46013C4.94235 7.58628 5.20265 7.7999 5.38579 8.07398C5.56892 8.34806 5.66667 8.6703 5.66667 8.99993C5.66667 9.44196 5.49108 9.86588 5.17851 10.1784C4.86595 10.491 4.44203 10.6666 4 10.6666ZM14 15.6666C13.6704 15.6666 13.3481 15.5689 13.0741 15.3857C12.8 15.2026 12.5864 14.9423 12.4602 14.6377C12.3341 14.3332 12.3011 13.9981 12.3654 13.6748C12.4297 13.3515 12.5884 13.0545 12.8215 12.8214C13.0546 12.5883 13.3516 12.4296 13.6749 12.3653C13.9982 12.301 14.3333 12.334 14.6378 12.4601C14.9424 12.5863 15.2027 12.7999 15.3858 13.074C15.5689 13.3481 15.6667 13.6703 15.6667 13.9999C15.6667 14.442 15.4911 14.8659 15.1785 15.1784C14.866 15.491 14.442 15.6666 14 15.6666Z"
                    fill="#F5F9FF"
                  />
                </svg>
                <div>share</div>
              </div>
            </div>
            <div className={`text-[38px] font-semibold ${quicksand.className}`}>
              $ {"1.99"}
            </div>
            <div>
              <button className="flex h-[44px] cursor-pointer  items-center justify-center whitespace-nowrap rounded-[24px] bg-[#3887F3] px-6 text-[12px] font-light hover:bg-[#5493eb] md:rounded-[64px] md:text-[16px]">
                Get Prompt
              </button>
            </div>
            <div>
              By purchasing this prompt, you agree to our terms of service.
            </div>
          </div>

          <div className="flex h-[500px] w-full flex-col items-end gap-5 overflow-y-scroll scrollbar-hide">
            {MOCK_CHATGPT_PROMT.content.map((e, i) => {
              return (
                <Image
                  key={i}
                  width={500}
                  height={0}
                  alt={e.name}
                  src={e.img}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-[64px] grid grid-cols-[25%_70%] gap-[5%]">
          <div className="">
            <p className={`text-[32px] font-bold ${quicksand.className}`}>
              Comments <span>{"(2)"}</span>
            </p>
            <div className={`${quicksand.className} text-[24px] font-bold`}>
              Average Rating
            </div>
            <div className="flex items-center gap-[20px]">
              <div
                className={`text-[24px] lg:text-[44px] ${quicksand.className}`}
              >
                4.00
              </div>
              <div className="whitespace-nowrap">
                <StarsRating
                  disabled
                  value={value}
                  onChange={(value) => {
                    setValue(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-[15px]">
              <Image
                className="rounded-[100%]"
                width={40}
                height={40}
                src={"/icon/mockImg.png"}
                alt="mockImg.svg"
              />
              <div className="self-center text-[18px] font-semibold">
                {"john"} {"doe"}
              </div>
            </div>
            <div className="my-[24px]">
              <StarsRating
                value={value}
                onChange={(value) => {
                  setValue(value);
                }}
              />
            </div>
            <div>
              <textarea
                className="h-[80px] w-full resize-none rounded-[12px] border border-[#505050] bg-black px-[16px] py-[12px]"
                placeholder="test"
              />
            </div>
            <div className="flex justify-end ">
              <button className="mt-[24px] flex h-[44px] cursor-pointer  items-center justify-center whitespace-nowrap rounded-[24px] bg-[#3887F3] px-6 text-[12px] font-light hover:bg-[#5493eb] md:rounded-[64px] md:text-[16px]">
                Comment
              </button>
            </div>
            <div className="mb-[fit-content] mt-[35px] h-[1px] w-full bg-[#383838]" />
            <div className="flex flex-col gap-[50px] p-[16px]">
              {Detail.map((e, i) => {
                return (
                  <div key={i} className="flex justify-between">
                    <div className="flex gap-[14px]">
                      <div className="relative h-[40px] w-[40px]">
                        <Image
                          className="rounded-[100%]"
                          fill
                          src={e.img}
                          alt={`image-${e.name}-avatar`}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <div>{e.name}</div>
                        <StarsRating
                          style={{
                            style: {
                              height: "25px",
                              fontSize: "20px",
                            },
                          }}
                          value={e.rate}
                          disabled
                        />
                        <div>{e.text}</div>
                      </div>
                    </div>
                    <div>dsakldasj</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[85px]">
          <SectionCard
            title={MOCK_CHATGPT_PROMT.title}
            content={MOCK_CHATGPT_PROMT.content}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PromptDetail;
