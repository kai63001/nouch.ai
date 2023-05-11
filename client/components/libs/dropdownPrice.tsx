import { useEffect, useRef, useState } from "react";

const DropdownPrice = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const customPriceRef: any = useRef(null);

  const inputDropdownRef: any = useRef(null);

  const dropdownRef: any = useRef(null);

  const priceList = [1.99, 2.99, 3.99, 4.99, 5.99, 0.0];

  const [price, setPrice] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        (dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          !customPriceRef.current.contains(event.target)) &&
        (inputDropdownRef.current &&
          !inputDropdownRef.current.contains(event.target))
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <label htmlFor="price" className="block mt-4 mb-1">
        Estimated Price
      </label>
      <div className="border-2 rounded-md relative">
        <div
          className="flex justify-between items-center cursor-pointer px-2 py-2 select-none"
          ref={inputDropdownRef}
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <div>{price < 0 ? "Price" : price == 0 ? "Free" : `$${price}`}</div>
          <div>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9999 1.1697C10.8126 0.983448 10.5591 0.878906 10.2949 0.878906C10.0308 0.878906 9.77731 0.983448 9.58995 1.1697L5.99995 4.7097L2.45995 1.1697C2.27259 0.983448 2.01913 0.878906 1.75495 0.878906C1.49076 0.878906 1.23731 0.983448 1.04995 1.1697C0.95622 1.26266 0.881826 1.37326 0.831057 1.49512C0.780288 1.61698 0.75415 1.74769 0.75415 1.8797C0.75415 2.01171 0.780288 2.14242 0.831057 2.26428C0.881826 2.38613 0.95622 2.49674 1.04995 2.5897L5.28995 6.8297C5.38291 6.92343 5.49351 6.99782 5.61537 7.04859C5.73723 7.09936 5.86794 7.1255 5.99995 7.1255C6.13196 7.1255 6.26267 7.09936 6.38453 7.04859C6.50638 6.99782 6.61699 6.92343 6.70995 6.8297L10.9999 2.5897C11.0937 2.49674 11.1681 2.38613 11.2188 2.26428C11.2696 2.14242 11.2957 2.01171 11.2957 1.8797C11.2957 1.74769 11.2696 1.61698 11.2188 1.49512C11.1681 1.37326 11.0937 1.26266 10.9999 1.1697Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-12 bg-[#242627] w-full left-0 rounded-md border border-gray-800 px-3 py-2 flex flex-col"
          >
            <p>Estimated Price</p>
            {/* radio */}
            {priceList.map((priceData, index) => (
              <div className="flex items-center w-full py-2" key={index}>
                <input
                  type="radio"
                  name="price"
                  id={`price${index}`}
                  className="mr-2"
                  defaultChecked={priceData === price}
                  onChange={() => {
                    setPrice(priceData);
                  }}
                />
                <label htmlFor={`price${index}`} className="w-full">
                  {priceData === 0.0 ? "Free" : `$${priceData}`}
                </label>
              </div>
            ))}
            <div className="flex items-center w-full py-2">
              <input
                type="radio"
                name="price"
                id="customPrice"
                className="mr-2"
                ref={customPriceRef}
                defaultChecked={
                  priceList.includes(price) || price < 0 ? false : true
                }
              />
              <label htmlFor="customPrice" className="w-full px-5 -ml-5">
                <div className="border-2 rounded-md w-full px-5 py-2 flex">
                  <span className="mr-2">$</span>
                  <input
                    type="text"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="0.00"
                    value={priceList.includes(price) || price < 0 ? "" : price}
                    onClick={() => {
                      customPriceRef.current.checked = true;
                    }}
                    onChange={(e: any) => {
                      //check if input is number
                      if (isNaN(e.target.value)) return;
                      setPrice(e.target.value);
                    }}
                  />
                  <span>USD</span>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownPrice;
