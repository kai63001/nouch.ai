import Layout from "@/components/Layout";
import { Dropdown, SearchSection } from "@/components/prompts";
import { MOCK_POPULAR_PROMT } from "../mock";
import type { FC, MouseEvent } from "react";
import { Card } from "@/components/Home";

const RECENTLY_OPTIONS = [
  { label: "Openjourney", value: "openjourney" },
  { label: "Stable Diffusion", value: "stable-diffusion" },
];

const Prompt: FC = () => {
  return (
    <Layout>
      <div className="lg:px-[150px]">
        <div className="flex items-center justify-center lg:justify-between">
          <div className="flex gap-[10px] ">
            <h1 className="text-[32px] font-semibold lg:text-[64px]">
              Explore
            </h1>
            <div className="mt-[10px] flex gap-[15px] lg:mt-[30px]">
              <div className="text-[12px] lg:text-[16px]">550</div>
              <div className="text-[12px] text-[#6C6D6D] lg:text-[16px]">
                items
              </div>
            </div>
          </div>
          <div className="hidden w-auto lg:flex">
            <Dropdown
              onClick={(e: MouseEvent<HTMLOptionElement>) => {
                console.log(e);
              }}
              title={"Recently Added"}
              option={RECENTLY_OPTIONS}
            />
          </div>
        </div>
        <SearchSection />
        <div className="mt-[64px] flex flex-wrap justify-center gap-[24px] lg:justify-between">
          {MOCK_POPULAR_PROMT.content.map((item, index) => {
            return <Card key={index} content={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Prompt;
