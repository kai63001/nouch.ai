import Image from "next/image";
import type { FC, MouseEvent } from "react";
import { useState } from "react";

interface option {
  label: string;
  value: string | undefined;
}

interface dropdownProps {
  title: string;
  option: option[];
  onClick: (event: MouseEvent<HTMLOptionElement>) => void;
}

interface renderOptionsProps {
  options: option[];
  onClickItem: (e: MouseEvent<HTMLOptionElement>) => void;
  value?: string;
}

const RenderOption: FC<renderOptionsProps> = (props) => {
  const { options, onClickItem, value } = props;

  const handleOnClick = (e: MouseEvent<HTMLOptionElement>) => {
    onClickItem(e);
  };

  return (
    <div className="absolute top-[60px] z-[80] w-full rounded-[12px] bg-[#242627] py-[15px]">
      <div className="max-h-[200px]">
        {options.map((item: option, index: number) => {
          const isHaveData = value === item.value;
          return (
            <option
              key={index}
              onClick={handleOnClick}
              value={item.value}
              style={
                isHaveData
                  ? {
                      backgroundImage: "url('/icon/check.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "90%",
                      backgroundColor: "#37393A",
                      display: "flex",
                      justifyContent: "space-between",
                    }
                  : {}
              }
              className="relative w-full cursor-pointer px-[16px] py-[10px] hover:bg-slate-500"
            >
              {item.label}
            </option>
          );
        })}
      </div>
    </div>
  );
};

const Dropdown: FC<dropdownProps> = (props) => {
  const { title, option, onClick } = props;
  const [isShowDropdown, setIsShowDropdown] = useState<Boolean>(false);
  const [data, setData] = useState<string | undefined>();

  const handleClickDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={handleClickDropdown}
        className={`flex cursor-pointer select-none justify-between gap-[16px] rounded-[64px] border border-white px-[24px] py-[14px] `}
      >
        <div className="text-[16px]">{data ?? title}</div>
        <Image
          src="/icon/arrow-down.svg"
          alt="arrow-left"
          width={20}
          height={20}
          className=""
        />
      </div>
      {isShowDropdown && (
        <RenderOption
          options={option}
          onClickItem={(e: MouseEvent<HTMLOptionElement>) => {
            const target = e.target as HTMLOptionElement;
            setData(target.value);
            setIsShowDropdown(!isShowDropdown);
            onClick(e);
          }}
          value={data}
        />
      )}
    </div>
  );
};

export default Dropdown;
