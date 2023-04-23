import { useState } from "react";
import ReactModal from "react-modal";
import ListCategoryModal from "./modal/listCategory.modal";

const ComboBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      <div onClick={()=>setOpen(true)} className="flex cursor-pointer items-center justify-between bg-secondary px-5 py-2 w-full rounded-md">
        <div className=" text-gray-400">Select Category</div>
        {/* icon dropdown or arrow down */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-gray-400 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        ariaHideApp={false}
        overlayClassName={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-20 z-10 flex items-center justify-center overflow-y-auto`}
        className="bg-black w-11/12 md:w-7/12 rounded-xl shadow-lg px-14 py-10 duration-200 items-center"
      >
        <ListCategoryModal></ListCategoryModal>
      </ReactModal>
    </div>
  );
};

export default ComboBox;
