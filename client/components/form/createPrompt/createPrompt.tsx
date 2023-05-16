import DropdownPrice from "@/components/libs/dropdownPrice";
import { setFromCreatePrompt } from "@/store/formPromptDataSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Model } from "@/libs/model";
import { useState } from "react";

const CreatePromptForm = () => {
  const model:any = Model
  //use selection
  const fromCreatePrompt = useSelector(
    (state: RootState) => state.FromCreatePromptSlice
  );

  const [version, setVersion] = useState([]);

  const dispath = useDispatch();

  const setDispath = (field: any, value: any) => {
    dispath(
      setFromCreatePrompt({
        ...fromCreatePrompt,
        [field]: value,
      })
    );
  };

  const handleOnModel = (data: string) => {
    //get version from Model
    const version = model[data].version;
    setVersion(version);
  };
  

  return (
    <>
      <h1 className="text-2xl font-bold">Create your prompt</h1>
      <label htmlFor="title" className="block mt-4 mb-1">
        Name
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="border px-4 py-2 w-full rounded-md bg-transparent"
        placeholder="Enter a name for your prompt."
        onChange={(e) => setDispath("name", e.target.value)}
      />
      <div id="dropdown-group" className="flex flex-row space-x-3">
        <div className="w-full">
          <label htmlFor="model" className="block mt-4 mb-1">
            Model
          </label>
          {/* selection */}
          <div className="relative">
            <select
              id="model"
              name="model"
              className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
              defaultValue={"0"}
              onChange={(e) => {
                setDispath("model", e.target.value)
                handleOnModel(e.target.value)
              }}
            >
              {/* placeholder */}
              <option value="0" disabled>
                Select Model
              </option>
              {Object.keys(Model).map((item,key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
        </div>
        <div className="w-full">
          <label htmlFor="version" className="block mt-4 mb-1">
            Version
          </label>
          <div className="relative">
            <select
              id="version"
              name="version"
              className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
              defaultValue={"0"}
              onChange={(e) => setDispath("version", e.target.value)}
            >
              <option value="0" disabled>
                Select Model Version
              </option>
              {version.map((item,key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
        </div>
      </div>
      {/* description */}
      <div className="w-full">
        <label htmlFor="description" className="block mt-4 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
          placeholder="Explain what your prompt does for yours and what occasions it applies to..."
          rows={4}
          onChange={(e) => setDispath("description", e.target.value)}
        ></textarea>
      </div>
      <div className="w-4/12">
        <DropdownPrice />
      </div>
      <div className="w-full mt-5">
        <button
          onClick={() => {
            setDispath("step", 1);
          }}
          className="w-2/12 text-2xl rounded-full py-3 bg-blue-500"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CreatePromptForm;
