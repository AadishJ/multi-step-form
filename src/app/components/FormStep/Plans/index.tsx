import { Fragment } from "react";

import { TextInput } from "../../Form/TextInput";
import { Footer } from "../../Footer";
import Form from "../../Form";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

export function OfficeAddress() {
  const {
    addressLine1Field,
    dispatchAddressLine1Field,
    addressLine2Field,
    dispatchAddressLine2Field,
    addressLine3Field,
    dispatchAddressLine3Field,
    cityField,
    dispatchCityField,
    stateField,
    dispatchStateField,
    pinCodeField,
    dispatchPinCodeField,
    districtField,
    dispatchDistrictField,
    subDistrictField,
    dispatchSubDistrictField
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()
  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    // Validation for new address fields
    if (!addressLine1Field.value) {
      dispatchAddressLine1Field({ type: ACTIONS.SET_ERROR, errorMessage: 'Address Line 1 is required' })
      formHasError = true
    }

    if (!cityField.value) {
      dispatchCityField({ type: ACTIONS.SET_ERROR, errorMessage: 'City is required' })
      formHasError = true
    }

    if (!stateField.value) {
      dispatchStateField({ type: ACTIONS.SET_ERROR, errorMessage: 'State is required' })
      formHasError = true
    }

    if (!pinCodeField.value) {
      dispatchPinCodeField({ type: ACTIONS.SET_ERROR, errorMessage: 'Pin Code is required' })
      formHasError = true
    }

    if (!districtField.value) {
      dispatchDistrictField({ type: ACTIONS.SET_ERROR, errorMessage: 'District is required' })
      formHasError = true
    }

    if (!subDistrictField.value) {
      dispatchSubDistrictField({ type: ACTIONS.SET_ERROR, errorMessage: 'Sub District is required' })
      formHasError = true
    }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('office-address', JSON.stringify({
        addressLine1: addressLine1Field.value,
        addressLine2: addressLine2Field.value,
        addressLine3: addressLine3Field.value,
        city: cityField.value,
        state: stateField.value,
        pinCode: pinCodeField.value,
        district: districtField.value,
        subDistrict: subDistrictField.value
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Office Address"
          description="Please provide the complete office address."
        />

        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Address Line 1"
            placeholder="e.g. 1234 Startup Avenue"
            value={addressLine1Field.value}
            onChange={(value: string) => dispatchAddressLine1Field({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={addressLine1Field.errorMessage}
            clearError={() => dispatchAddressLine1Field({ type: ACTIONS.CLEAR_ERROR })}
            hasError={addressLine1Field.hasError}
          />
          <TextInput
            label="Address Line 2"
            placeholder="e.g. Block B, Innovation Park"
            value={addressLine2Field.value}
            onChange={(value: string) => dispatchAddressLine2Field({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={addressLine2Field.errorMessage}
            clearError={() => dispatchAddressLine2Field({ type: ACTIONS.CLEAR_ERROR })}
            hasError={addressLine2Field.hasError}
          />
          <TextInput
            label="Address Line 3"
            placeholder="e.g. Near Business Hub"
            value={addressLine3Field.value}
            onChange={(value: string) => dispatchAddressLine3Field({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={addressLine3Field.errorMessage}
            clearError={() => dispatchAddressLine3Field({ type: ACTIONS.CLEAR_ERROR })}
            hasError={addressLine3Field.hasError}
          />
          <TextInput
            label="City"
            placeholder="e.g. Mumbai"
            value={cityField.value}
            onChange={(value: string) => dispatchCityField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={cityField.errorMessage}
            clearError={() => dispatchCityField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={cityField.hasError}
          />
          <TextInput
            label="State"
            placeholder="e.g. Maharashtra"
            value={stateField.value}
            onChange={(value: string) => dispatchStateField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={stateField.errorMessage}
            clearError={() => dispatchStateField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={stateField.hasError}
          />
          <TextInput
            label="Pin Code"
            placeholder="e.g. 400001"
            value={pinCodeField.value}
            onChange={(value: string) => dispatchPinCodeField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={pinCodeField.errorMessage}
            clearError={() => dispatchPinCodeField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={pinCodeField.hasError}
          />
          <TextInput
            label="District"
            placeholder="e.g. Mumbai"
            value={districtField.value}
            onChange={(value: string) => dispatchDistrictField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={districtField.errorMessage}
            clearError={() => dispatchDistrictField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={districtField.hasError}
          />
          <TextInput
            label="Sub District"
            placeholder="e.g. Mumbai Suburban"
            value={subDistrictField.value}
            onChange={(value: string) => dispatchSubDistrictField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={subDistrictField.errorMessage}
            clearError={() => dispatchSubDistrictField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={subDistrictField.hasError}
          />
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}
