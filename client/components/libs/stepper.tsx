import React from "react";

interface stepperProps {
  steps: any;
  activeStep: any;
  setActiveStep: any;
}

const Stepper = ({ steps, activeStep, setActiveStep }: stepperProps) => {
  return (
    <div className="flex justify-between px-10 mb-10">
      {steps.map((step: any, index: any) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center relative">
            <div
              key={index}
              className={`border-2 w-14 h-14 flex rounded-full cursor-pointer font-bold ${
                activeStep === index ? "border-[#3B82F6]" : "border-[#37393A]"
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="m-auto">{step.id}</div>
            </div>
            <p className="mt-14 absolute whitespace-nowrap">{step.title}</p>
          </div>
          {/* line */}
          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mt-6 mx-3 bg-[#37393A] ${
                activeStep > index ? "bg-blue-400" : ""
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
