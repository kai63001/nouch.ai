const FormCreateChatGptPrompt = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Prompt File</h1>
      <p className="mb-4 text-sm">Copy and paste the JSON GPT prompt file from the OpenAI playground. Ensure any editable parts of your prompt are indicated by [square brackets].</p>
      <p className="text-sm">Watch our 19 second guide to the right (below on mobile) if you're stuck.</p>

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
      </div>
    </>
  );
};

export default FormCreateChatGptPrompt;
