import type { FC, MouseEvent } from "react";
import Dropdown from "./dropdown";

const SORT_BY_OPTIONS = [
  { label: "Sort by", value: undefined },
  { label: "Top", value: "top" },
  { label: "Newest", value: "newest" },
  { label: "Recommend", value: "recommend" },
];

const PRICE_OPTIONS = [
  { label: "Select Price", value: undefined },
  { label: "$0.99", value: "0.99" },
  { label: "$1.99", value: "1.99" },
  { label: "$2.99", value: "2.99" },
  { label: "$3.99", value: "3.99" },
];

const COLLECTION_OPTIONS = [
  { label: "Select Model", value: undefined },
  { label: "Chat GPT", value: "chat-gpt" },
  { label: "Mindjourney", value: "mindjourney" },
  { label: "Openjourney", value: "openjourney" },
  { label: "DALL-E", value: "dall-e" },
  { label: "Stable Diffusion", value: "stable-diffusion" },
];

const CATEGORY_OPTIONS = [
  { label: "Select Category", value: undefined },
  { label: "Portraits", value: "portraits" },
  { label: "Fashion", value: "fashion" },
  { label: "Architecture", value: "architecture" },
];

const SearchSection: FC = () => {
  return (
    <div className="mx-[8px] mt-[50px] flex gap-[30px] overflow-x-scroll">
      <div className="flex w-[150px] gap-[14px] rounded-[64px] border border-white bg-white p-[14px]">
        <div className="cursor-default whitespace-nowrap font-semibold text-black">
          Clear Filters
        </div>
        <div className="flex cursor-pointer items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.66885 11.1188L0.881348 10.3313L5.2126 6.0001L0.881348 1.66885L1.66885 0.881348L6.0001 5.2126L10.3313 0.881348L11.1188 1.66885L6.7876 6.0001L11.1188 10.3313L10.3313 11.1188L6.0001 6.7876L1.66885 11.1188Z" />
          </svg>
        </div>
      </div>
      <div className="min-w-[150px]">
        <Dropdown
          onClick={(e: MouseEvent<HTMLOptionElement>) => {
            const target = e.target as HTMLOptionElement;
            console.log(target.value);
          }}
          title={"Sort by"}
          option={SORT_BY_OPTIONS}
        />
      </div>
      <div className="min-w-[120px]">
        <Dropdown
          onClick={(e: MouseEvent<HTMLOptionElement>) => {
            const target = e.target as HTMLOptionElement;
            console.log(target.value);
          }}
          title={"Price"}
          option={PRICE_OPTIONS}
        />
      </div>
      <div className="min-w-[150px]">
        <Dropdown
          onClick={(e: MouseEvent<HTMLOptionElement>) => {
            const target = e.target as HTMLOptionElement;
            console.log(target.value);
          }}
          title={"Model"}
          option={COLLECTION_OPTIONS}
        />
      </div>
      <div className="min-w-[150px]">
        <Dropdown
          onClick={(e: MouseEvent<HTMLOptionElement>) => {
            const target = e.target as HTMLOptionElement;
            console.log(target.value);
          }}
          title={"Category"}
          option={CATEGORY_OPTIONS}
        />
      </div>
    </div>
  );
};
export default SearchSection;
