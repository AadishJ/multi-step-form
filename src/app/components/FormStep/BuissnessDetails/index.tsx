import { Fragment } from "react";
import { TextInput } from "../../Form/TextInput";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

export function BusinessDetailsForm() {
  const {
    briefDescriptionField,
    dispatchBriefDescriptionField,
    websiteURLField,
    dispatchWebsiteURLField,
    stageOfBusinessField,
    dispatchStageOfBusinessField,
    fundingDetailsField,
    dispatchFundingDetailsField,
  } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();
  const { saveValueToLocalStorage } = useLocalStorage();

  function validateForm() {
    let formHasError = false;

    // Validation for the form fields
    if (!briefDescriptionField.value) {
      dispatchBriefDescriptionField({ type: ACTIONS.SET_ERROR, errorMessage: 'Brief description is required' });
      formHasError = true;
    }

    if (!websiteURLField.value) {
      dispatchWebsiteURLField({ type: ACTIONS.SET_ERROR, errorMessage: 'Website URL is required' });
      formHasError = true;
    }

    if (!stageOfBusinessField.value) {
      dispatchStageOfBusinessField({ type: ACTIONS.SET_ERROR, errorMessage: 'Stage of business is required' });
      formHasError = true;
    }

    if (!fundingDetailsField.value) {
      dispatchFundingDetailsField({ type: ACTIONS.SET_ERROR, errorMessage: 'Funding details are required' });
      formHasError = true;
    }

    return !formHasError;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      saveValueToLocalStorage('business-details', JSON.stringify({
        briefDescription: briefDescriptionField.value,
        websiteURL: websiteURLField.value,
        stageOfBusiness: stageOfBusinessField.value,
        fundingDetails: fundingDetailsField.value,
      }));
      handleNextStep();
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Business Details"
          description="Please provide the details of your business."
        />

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Brief Description"
            placeholder="Enter brief description"
            value={briefDescriptionField.value}
            onChange={(value: string) => dispatchBriefDescriptionField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={briefDescriptionField.errorMessage}
            clearError={() => dispatchBriefDescriptionField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={briefDescriptionField.hasError}
          />
          <TextInput
            label="Website URL"
            placeholder="Enter website URL"
            value={websiteURLField.value}
            onChange={(value: string) => dispatchWebsiteURLField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={websiteURLField.errorMessage}
            clearError={() => dispatchWebsiteURLField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={websiteURLField.hasError}
          />
          <TextInput
            label="Stage of Business"
            placeholder="Enter stage of business"
            value={stageOfBusinessField.value}
            onChange={(value: string) => dispatchStageOfBusinessField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={stageOfBusinessField.errorMessage}
            clearError={() => dispatchStageOfBusinessField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={stageOfBusinessField.hasError}
          />
          <TextInput
            label="Funding Details"
            placeholder="Enter funding details"
            value={fundingDetailsField.value}
            onChange={(value: string) => dispatchFundingDetailsField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={fundingDetailsField.errorMessage}
            clearError={() => dispatchFundingDetailsField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={fundingDetailsField.hasError}
          />
        </form>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleNextStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
