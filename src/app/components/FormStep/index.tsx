import { useFormStep } from "../../hooks/use-form-step";

import { YourInfo } from "./YourInfo";
import { OfficeAddress } from "./Plans";
import { AuthorizedRepresentativeForm } from "./AddOns";
import {BusinessDetailsForm} from "./BuissnessDetails"
import components from "../Form";
// import { Summary } from "./Summary";

const steps = [
  {
    step: 1,
    component: YourInfo
  },
  {
    step: 2,
    component: OfficeAddress
  },
  {
    step: 3,
    component: AuthorizedRepresentativeForm
  },
  {
    step: 4,
    component: BusinessDetailsForm
  },
  {
    step: 5,
    component: BusinessDetailsForm
  },
  {
    step: 5,
    component: BusinessDetailsForm
  }
]

export function FormStep() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && step.component()}
    </div>
  )
} 