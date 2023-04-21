const ComboBox = () => {
  return (
    <div className="mt-2">
      <div className="flex cursor-pointer items-center justify-between bg-secondary px-5 py-2 w-full rounded-md">
        <div className=" text-gray-400">
          Select Category
        </div>
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
    </div>
  );
};

export default ComboBox;
