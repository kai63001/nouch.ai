import Layout from "@/components/Layout";
import CreatePromptForm from "@/components/form/createPrompt/createPrompt";
import Stepper from "@/components/libs/stepper";
import { useState } from "react";

const CreatePromptPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <Layout>
      <div className="max-w-3xl w-full m-auto">
        <div className="mb-5">
          <Stepper
            steps={[
              {
                title: "Create Prompt",
                id: 1,
              },
              {
                title: "Prompt File",
                id: 2,
              },
              {
                title: "Payment Setup",
                id: 3,
              },
            ]}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <CreatePromptForm/>
      </div>
    </Layout>
  );
};

export default CreatePromptPage;
