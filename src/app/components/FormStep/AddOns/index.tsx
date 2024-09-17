import { Fragment } from "react";

import { TextInput } from "../../Form/TextInput";
import { Footer } from "../../Footer";
import Form from "../../Form";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

export function AuthorizedRepresentativeForm() {
  const {
    representativeNameField,
    dispatchRepresentativeNameField,
    representativeDesignationField,
    dispatchRepresentativeDesignationField,
    representativeMobileField,
    dispatchRepresentativeMobileField,
    representativeEmailField,
    dispatchRepresentativeEmailField,
  } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();
  const { saveValueToLocalStorage } = useLocalStorage();

  function validateForm() {
    let formHasError = false;

    // Validation for the form fields
    if (!representativeNameField.value) {
      dispatchRepresentativeEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' });
      formHasError = true;
    }

    if (!representativeDesignationField.value) {
      dispatchRepresentativeDesignationField({ type: ACTIONS.SET_ERROR, errorMessage: 'Designation is required' });
      formHasError = true;
    }

    if (!representativeMobileField.value) {
      dispatchRepresentativeMobileField({ type: ACTIONS.SET_ERROR, errorMessage: 'Mobile number is required' });
      formHasError = true;
    }

    if (!representativeEmailField.value) {
      dispatchRepresentativeEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' });
      formHasError = true;
    }

    return !formHasError;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      saveValueToLocalStorage('authorized-representative', JSON.stringify({
        name: representativeNameField.value,
        designation: representativeDesignationField.value,
        mobile: representativeMobileField.value,
        email: representativeEmailField.value
      }));
      handleNextStep();
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Authorized Representative Details"
          description="Please provide the details of the authorized representative."
        />

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name of Authorized Representative"
            placeholder="Enter name"
            value={representativeNameField.value}
            onChange={(value: string) => dispatchRepresentativeNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={representativeNameField.errorMessage}
            clearError={() => dispatchRepresentativeNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={representativeNameField.hasError}
          />
          <TextInput
            label="Designation of Authorized Representative"
            placeholder="Enter designation"
            value={representativeDesignationField.value}
            onChange={(value: string) => dispatchRepresentativeDesignationField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={representativeDesignationField.errorMessage}
            clearError={() => dispatchRepresentativeDesignationField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={representativeDesignationField.hasError}
          />
          <TextInput
            label="Mobile No. of Authorized Representative"
            placeholder="Enter mobile number"
            value={representativeMobileField.value}
            onChange={(value: string) => dispatchRepresentativeMobileField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={representativeMobileField.errorMessage}
            clearError={() => dispatchRepresentativeMobileField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={representativeMobileField.hasError}
          />
          <TextInput
            label="Email ID of Authorized Representative"
            placeholder="Enter email"
            value={representativeEmailField.value}
            onChange={(value: string) => dispatchRepresentativeEmailField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={representativeEmailField.errorMessage}
            clearError={() => dispatchRepresentativeEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={representativeEmailField.hasError}
          />

          {/* <button type="submit" className="mt-4 px-4 py-2 bg-purple text-white rounded-lg hover:bg-dark-purple transition-colors duration-300">
            Submit
          </button> */}
        </form>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleNextStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
