import ComboBox from "@/components/form/combobox";
import { Kanit } from "next/font/google";
import { useState } from "react";

const kanit = Kanit({
  weight: "600",
  subsets: ["latin"],
});

const CreatePromptModal = () => {
  const [openNote, setOpenNote] = useState(false);

  return (
    <div className={`${kanit.className}`}>
      <h2 className="text-2xl">Create a New Prompt</h2>
      <div className="mt-4">
        <label htmlFor="title">Prompt Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="mt-2 px-4 py-2 w-full rounded-md outline-pink-500 focus:outline outline-2  outline-offset-2 bg-secondary"
          placeholder="Enter a Title"
        />
        <span className="text-xs text-gray-400">
          The harder must contain a maximum of 32 characters
        </span>
      </div>
      <div className="mt-2">
        <label htmlFor="description">Prompt Text</label>
        <textarea
          rows={8}
          name="description"
          id="description"
          className="mt-2 px-4 py-2 w-full rounded-md outline-pink-500 focus:outline outline-2  outline-offset-2 bg-secondary max-h-56"
          placeholder="Enter a Prompt"
        ></textarea>
      </div>
      <div className="mt-2 border border-secondary rounded-md px-5 py-3">
        <div className="flex justify-between items-center">
          <div>
            <p>Note</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full mt-1.5">
                <input
                  id="switch-component"
                  type="checkbox"
                  onChange={(e) => {
                    setOpenNote(e.target.checked);
                  }}
                  className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-secondary bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                />
                <label
                  htmlFor="switch-component"
                  className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                >
                  <div
                    className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                    data-ripple-dark="true"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        {openNote && (
          <div className="mt-2">
            <textarea
              rows={3}
              name="description"
              id="description"
              className="mt-2 px-4 py-2 w-full rounded-md outline-pink-500 focus:outline outline-2  outline-offset-2 bg-secondary max-h-56"
              placeholder="Enter a Note"
            ></textarea>
          </div>
        )}
      </div>
      <div className="mt-2">
        <label htmlFor="title">Category</label>
        <ComboBox/>
      </div>
    </div>
  );
};

export default CreatePromptModal;
