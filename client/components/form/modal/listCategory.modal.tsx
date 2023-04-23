import { Kanit } from "next/font/google";
import { useState } from "react";

const kanit = Kanit({
  weight: "600",
  subsets: ["latin"],
});
const ListCategoryModal = () => {
  const listCategory = ["Midjunior", "Chat GBT"];

  const [selectCategory, setSelectCategory]:any = useState([]);

  const handleSelectCategory = (category: any) => {
    if (selectCategory.includes(category)) {
      setSelectCategory(selectCategory.filter((item:any) => item !== category));
    } else {
      setSelectCategory([...selectCategory, category]);
    }
  };

  return (
    <div className={kanit.className}>
      <h2 className="text-2xl">Select Category</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {listCategory.map((category, index) => {
          return (
            <div
                key={index}
                className={`select-none ${
                    selectCategory.includes(category)
                    ? "bg-pink-500 text-white"
                    : "bg-secondary text-gray-400"
                } px-4 py-2 rounded-md cursor-pointer`}
                onClick={() => handleSelectCategory(category)}
            >
                {category}
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default ListCategoryModal;
