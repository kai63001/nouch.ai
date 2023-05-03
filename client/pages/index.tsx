import { SectionCard } from "@/components/Home";
import { HeroSection } from "@/components/Home";
import Layout from "@/components/Layout";
import { MOCK_CHATGPT_PROMT, MOCK_POPULAR_PROMT } from './mock'
import PrototypeSection from "@/components/Home/PrototypeSection";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-[url('/icon/bg-01.png')] bg-no-repeat bg-cover w-full h-[100vh]">
      <Layout>
        <div>
          <HeroSection />
          <div className="">
            <div className="mt-24">
              <SectionCard autoSlide title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
            <div className="mt-24">
              <SectionCard title={MOCK_CHATGPT_PROMT.title} content={MOCK_CHATGPT_PROMT.content} />
            </div>
            <div className="mt-24">
              <PrototypeSection title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
            <div className="mt-24">
              <SectionCard title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
          </div>
          <div className="mt-[100px] flex justify-center flex-col items-center  font-bold">
            <div className="text-[32px] md:text-[48px]">Video How to Sell</div>
            <div className="mt-10 flex flex-col items-center justify-center gap-[4px] py-[20px] w-[50px] border-solid border-[1px] rounded-[32px] border-[#ffffff]">
              <div className="w-[6px] h-[6px] bg-white rounded-full" />
              <div className="w-[6px] h-[6px] bg-white rounded-full" />
              <div className="w-[6px] h-[6px] bg-white rounded-full" />
              <Image height={40} width={32} src={'/icon/line-arrow-down.svg'} alt="line-arrow-down" />
            </div>
            <div className="mt-[50px]">
              <iframe className="w-[350px] h-[255px] md:w-[550px] md:h-[355px]" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex flex-col bg-[#242627] p-[32px] mt-[100px] w-[80%] md:w-[60%] rounded-[16px]">
              <div className="flex justify-center text-[22px] md:text-[32px] text-center">Ready to create your prompts?</div>
              <div className="flex justify-center text-center mt-[16px] text-[14px] font-extralight">
                Sit deserunt deserunt cillum anim occaecat. Mollit Lorem in irure commodo eiusmod adipisicing reprehenderit officia sit in. Reprehenderit eu mollit qui incididunt labore incididunt do amet sunt magna. Lorem ipsum dolor sit
              </div>
              <div className="flex justify-center">
                <button className="cursor-pointer mt-[20px] whitespace-nowrap bg-[#3887F3]  hover:bg-[#5493eb] px-6 rounded-[24px] md:rounded-[64px] h-[44px] flex justify-center items-center font-light md:text-[16px] text-[12px]">Sell Now</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
