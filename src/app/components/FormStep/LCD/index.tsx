import { Fragment } from "react";
import { TextInput } from "../../Form/TextInput";
import { FileInput } from "../../Form/FileInput";  // Add FileInput import
import { Footer } from "../../Footer";
import Form from "../../Form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

export function BusinessDetailsFormDocument() {
  const {
    briefDescriptionField,
    dispatchBriefDescriptionField,
    websiteURLField,
    dispatchWebsiteURLField,
    stageOfBusinessField,
    dispatchStageOfBusinessField,
    fundingDetailsField,
    dispatchFundingDetailsField,
    certificateOfIncorporationField,
    dispatchCertificateOfIncorporationField,
    panTanField,
    dispatchPanTanField,
    gstRegistrationField,
    dispatchGstRegistrationField,
    patentField,
    dispatchPatentField,
    trademarkField,
    dispatchTrademarkField,
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

    if (!certificateOfIncorporationField.value) {
      dispatchCertificateOfIncorporationField({ type: ACTIONS.SET_ERROR, errorMessage: 'Certificate of Incorporation is required' });
      formHasError = true;
    }

    if (!panTanField.value) {
      dispatchPanTanField({ type: ACTIONS.SET_ERROR, errorMessage: 'PAN/TAN Number is required' });
      formHasError = true;
    }

    if (!gstRegistrationField.value) {
      dispatchGstRegistrationField({ type: ACTIONS.SET_ERROR, errorMessage: 'GST Registration is required' });
      formHasError = true;
    }

    if (!patentField.value) {
      dispatchPatentField({ type: ACTIONS.SET_ERROR, errorMessage: 'Patent is required' });
      formHasError = true;
    }

    if (!trademarkField.value) {
      dispatchTrademarkField({ type: ACTIONS.SET_ERROR, errorMessage: 'Trademark is required' });
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
        certificateOfIncorporation: certificateOfIncorporationField.value,
        panTan: panTanField.value,
        gstRegistration: gstRegistrationField.value,
        patent: patentField.value,
        trademark: trademarkField.value,
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
          {/* Existing fields */}
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

          {/* Updated fields for legal and compliance documents */}
          <FileInput
            label="Certificate of Incorporation"
            onChange={(file: File | null) => dispatchCertificateOfIncorporationField({ type: ACTIONS.SET_VALUE, value: file })}
            errorMessage={certificateOfIncorporationField.errorMessage}
            hasError={certificateOfIncorporationField.hasError}
          />
          <TextInput
            label="PAN/TAN Number"
            placeholder="Enter PAN/TAN number"
            value={panTanField.value}
            onChange={(value: string) => dispatchPanTanField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={panTanField.errorMessage}
            clearError={() => dispatchPanTanField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={panTanField.hasError}
          />
          <TextInput
            label="GST Registration"
            placeholder="Enter GST registration number"
            value={gstRegistrationField.value}
            onChange={(value: string) => dispatchGstRegistrationField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={gstRegistrationField.errorMessage}
            clearError={() => dispatchGstRegistrationField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={gstRegistrationField.hasError}
          />
          <FileInput
            label="Patent"
            onChange={(file: File | null) => dispatchPatentField({ type: ACTIONS.SET_VALUE, value: file })}
            errorMessage={patentField.errorMessage}
            hasError={patentField.hasError}
          />
          <FileInput
            label="Trademark"
            onChange={(file: File | null) => dispatchTrademarkField({ type: ACTIONS.SET_VALUE, value: file })}
            errorMessage={trademarkField.errorMessage}
            hasError={trademarkField.hasError}
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
