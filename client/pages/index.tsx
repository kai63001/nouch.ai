import { SectionCard } from "@/components/Home";
import { HeroSection } from "@/components/Home";
import Layout from "@/components/Layout";
import { MOCK_CHATGPT_PROMT, MOCK_POPULAR_PROMT } from "./mock";
import PrototypeSection from "@/components/Home/PrototypeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] w-full bg-[url('/icon/bg-01.png')] bg-cover bg-no-repeat  lg:px-[150px]">
      <Layout>
        <div>
          <HeroSection />
          <div className="">
            <div className="mt-24">
              <SectionCard
                autoSlide
                title={MOCK_POPULAR_PROMT.title}
                content={MOCK_POPULAR_PROMT.content}
              />
            </div>
            <div className="mt-24">
              <SectionCard
                title={MOCK_CHATGPT_PROMT.title}
                content={MOCK_CHATGPT_PROMT.content}
              />
            </div>
            <div className="mt-24">
              <PrototypeSection
                title={MOCK_POPULAR_PROMT.title}
                content={MOCK_POPULAR_PROMT.content}
              />
            </div>
            <div className="mt-24">
              <SectionCard
                title={MOCK_POPULAR_PROMT.title}
                content={MOCK_POPULAR_PROMT.content}
              />
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center justify-center  font-bold">
            <div className="text-[32px] md:text-[48px]">Video How to Sell</div>
            <div className="mt-10 flex w-[50px] flex-col items-center justify-center gap-[4px] rounded-[32px] border-[1px] border-solid border-[#ffffff] py-[20px]">
              <div className="h-[6px] w-[6px] rounded-full bg-white" />
              <div className="h-[6px] w-[6px] rounded-full bg-white" />
              <div className="h-[6px] w-[6px] rounded-full bg-white" />
              <Image
                height={40}
                width={32}
                src={"/icon/line-arrow-down.svg"}
                alt="line-arrow-down"
              />
            </div>
            <div className="mt-[50px]">
              <iframe
                className="h-[255px] w-[350px] md:h-[355px] md:w-[550px]"
                src="https://www.youtube.com/embed/xNRJwmlRBNU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-[100px] flex w-[80%] flex-col rounded-[16px] bg-[#242627] p-[32px] md:w-[60%]">
              <div className="flex justify-center text-center text-[22px] md:text-[32px]">
                Ready to create your prompts?
              </div>
              <div className="mt-[16px] flex justify-center text-center text-[14px] font-extralight">
                Sit deserunt deserunt cillum anim occaecat. Mollit Lorem in
                irure commodo eiusmod adipisicing reprehenderit officia sit in.
                Reprehenderit eu mollit qui incididunt labore incididunt do amet
                sunt magna. Lorem ipsum dolor sit
              </div>
              <div className="flex justify-center">
                <button className="mt-[20px] flex h-[44px] cursor-pointer  items-center justify-center whitespace-nowrap rounded-[24px] bg-[#3887F3] px-6 text-[12px] font-light hover:bg-[#5493eb] md:rounded-[64px] md:text-[16px]">
                  Sell Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
