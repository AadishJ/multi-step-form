import { useFormStep } from "../../hooks/use-form-step";
import { Step } from "./Step";

export function Sidebar() {
  const { currentStep, steps } = useFormStep();

  return (
    <div
      className="
      flex flex-row justify-center items-center pt-8 h-[172px] w-full bg-green-500
      sm:justify-start sm:items-start sm:p-8 sm:w-full sm:h-[auto] sm:bg-green-500 sm:rounded-none"
    >
      <div className="flex flex-row gap-4 sm:flex-row sm:gap-8">
        {steps.map((step) => {
          return (
            <Step
              key={step.number}
              step={step}
              isActive={step.number === currentStep}
            />
          );
        })}
      </div>
    </div>
  );
}
