import { setFromCreatePrompt } from "@/store/formPromptDataSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const FormCreateChatGptPrompt = () => {

  const dispath = useDispatch();

  const fromCreatePrompt = useSelector(
    (state: RootState) => state.FromCreatePromptSlice
  );

  const setDispath = (field: any, value: any) => {
    dispath(
      setFromCreatePrompt({
        ...fromCreatePrompt,
        [field]: value,
      })
    );
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Prompt File</h1>
      <p className="mb-4 text-sm">
        Copy and paste the JSON GPT prompt file from the OpenAI playground.
        Ensure any editable parts of your prompt are indicated by [square
        brackets].
      </p>
      <p className="text-sm">
        Watch our 19 second guide to the right (below on mobile) if you're
        stuck.
      </p>

      <div className="w-full">
        <label htmlFor="prompt" className="block mt-4 mb-1">
          Prompt
        </label>
        <textarea
          id="prompt"
          name="prompt"
          className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
          placeholder="Explain what your prompt does for yours and what occasions it applies to..."
          rows={4}
        ></textarea>
        <label htmlFor="prompt" className="block mt-4 mb-1">
          Prompt Instructions
        </label>
        <textarea
          id="prompt-instructions"
          name="prompt-instructions"
          className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
          placeholder="Explain what your prompt does for yours and what occasions it applies to..."
          rows={2}
        ></textarea>
        <div className="w-full mt-5">
          <button
            onClick={() => {
              setDispath("step", 2);
            }}
            className="w-2/12 text-2xl rounded-full py-3 bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FormCreateChatGptPrompt;
