import Layout from "@/components/Layout";
import CreatePromptForm from "@/components/form/createPrompt/createPrompt";
import FormCreateChatGptPrompt from "@/components/form/createPrompt/prompt/chatGpt";
import PaymentSetup from "@/components/form/createPrompt/prompt/payment";
import Stepper from "@/components/libs/stepper";
import formPromptDataSlice, {
  setFromCreatePrompt,
} from "@/store/formPromptDataSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const CreatePromptPage = () => {
  const fromCreatePrompt = useSelector(
    (state: RootState) => state.FromCreatePromptSlice
  );

  const dispath = useDispatch();

  const setActiveStep = (value: any) => {
    dispath(
      setFromCreatePrompt({
        ...fromCreatePrompt,
        step: value,
      })
    );
  };

  const renderStep = () => {
    switch (fromCreatePrompt.step) {
      case 1:
        return <FormCreateChatGptPrompt/>;
      case 2:
        return <PaymentSetup/>;
      default:
        return <CreatePromptForm />;
    }
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
            activeStep={fromCreatePrompt.step}
            setActiveStep={setActiveStep}
          />
        </div>
        {renderStep()}
      </div>
    </Layout>
  );
};

export default CreatePromptPage;
