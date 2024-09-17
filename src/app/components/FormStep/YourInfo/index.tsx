'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";

export function YourInfo() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    startupNameField, // New field
    dispatchStartupNameField, // Dispatcher for new field
    incorporationDateField, // New field
    dispatchIncorporationDateField, // Dispatcher for new field
    entityTypeField, // New field
    dispatchEntityTypeField, // Dispatcher for new field
    industrySectorField, // New field
    dispatchIndustrySectorField, // Dispatcher for new field
    incorporationNumberField, // New field
    dispatchIncorporationNumberField, // Dispatcher for new field
    registrationDateField, // New field
    dispatchRegistrationDateField, // Dispatcher for new field
    companyAddressField, // New field
    dispatchCompanyAddressField, // Dispatcher for new field
    companyPhoneNumberField, // New field
    dispatchCompanyPhoneNumberField, // Dispatcher for new field
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()
  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    if (!nameField.value) {
      dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' })
      formHasError = true
    }

    if (!emailField.value) {
      dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' })
      formHasError = true
    } else {
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' })
        formHasError = true
      }
    }

    if (!phoneNumberField.value) {
      dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' })
      formHasError = true
    } else {
      if (phoneNumberField.value.length < 6) {
        dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' })
        formHasError = true
      }
    }

    // Add validation for company info fields
    if (!startupNameField.value) {
      dispatchStartupNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Startup name is required' })
      formHasError = true
    }

    if (!incorporationDateField.value) {
      dispatchIncorporationDateField({ type: ACTIONS.SET_ERROR, errorMessage: 'Incorporation date is required' })
      formHasError = true
    }

    if (!entityTypeField.value) {
      dispatchEntityTypeField({ type: ACTIONS.SET_ERROR, errorMessage: 'Business entity type is required' })
      formHasError = true
    }

    if (!industrySectorField.value) {
      dispatchIndustrySectorField({ type: ACTIONS.SET_ERROR, errorMessage: 'Industry sector is required' })
      formHasError = true
    }

    if (!incorporationNumberField.value) {
      dispatchIncorporationNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Incorporation number is required' })
      formHasError = true
    }

    if (!registrationDateField.value) {
      dispatchRegistrationDateField({ type: ACTIONS.SET_ERROR, errorMessage: 'Registration date is required' })
      formHasError = true
    }

    if (!companyAddressField.value) {
      dispatchCompanyAddressField({ type: ACTIONS.SET_ERROR, errorMessage: 'Company address is required' })
      formHasError = true
    }

    if (!companyPhoneNumberField.value) {
      dispatchCompanyPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Company phone number is required' })
      formHasError = true
    }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value,
        startupName: startupNameField.value,
        incorporationDate: incorporationDateField.value,
        entityType: entityTypeField.value,
        industrySector: industrySectorField.value,
        incorporationNumber: incorporationNumberField.value,
        registrationDate: registrationDateField.value,
        companyAddress: companyAddressField.value,
        companyPhoneNumber: companyPhoneNumberField.value,
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Personal & Company Info"
          description="Please provide your name, email address, phone number, and basic company details."
        />

        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            value={nameField.value}
            onChange={(value: string) => dispatchNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={emailField.value}
            onChange={(value: string) => dispatchEmailField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={emailField.errorMessage}
            clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={emailField.hasError}
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumberField.value}
            onChange={(value: string) => dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={phoneNumberField.errorMessage}
            clearError={() => dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={phoneNumberField.hasError}
          />
          {/* Additional company info fields */}
          <TextInput
            label="Startup Name"
            placeholder="e.g. Innovative Tech Solutions Pvt. Ltd."
            value={startupNameField.value}
            onChange={(value: string) => dispatchStartupNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={startupNameField.errorMessage}
            clearError={() => dispatchStartupNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={startupNameField.hasError}
          />
          <TextInput
            label="Incorporation Date"
            placeholder="e.g. January 10, 2020"
            value={incorporationDateField.value}
            onChange={(value: string) => dispatchIncorporationDateField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={incorporationDateField.errorMessage}
            clearError={() => dispatchIncorporationDateField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={incorporationDateField.hasError}
          />
          <TextInput
            label="Business Entity Type"
            placeholder="e.g. Private Limited"
            value={entityTypeField.value}
            onChange={(value: string) => dispatchEntityTypeField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={entityTypeField.errorMessage}
            clearError={() => dispatchEntityTypeField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={entityTypeField.hasError}
          />
          <TextInput
            label="Industry Sector"
            placeholder="e.g. Fintech"
            value={industrySectorField.value}
            onChange={(value: string) => dispatchIndustrySectorField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={industrySectorField.errorMessage}
            clearError={() => dispatchIndustrySectorField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={industrySectorField.hasError}
          />
          <TextInput
            label="Incorporation Number"
            placeholder="e.g. U1234567MH2020PTC123456"
            value={incorporationNumberField.value}
            onChange={(value: string) => dispatchIncorporationNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={incorporationNumberField.errorMessage}
            clearError={() => dispatchIncorporationNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={incorporationNumberField.hasError}
          />
          <TextInput
            label="Registration Date"
            placeholder="e.g. January 12, 2020"
            value={registrationDateField.value}
            onChange={(value: string) => dispatchRegistrationDateField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={registrationDateField.errorMessage}
            clearError={() => dispatchRegistrationDateField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={registrationDateField.hasError}
          />
          <TextInput
            label="Company Address"
            placeholder="e.g. 1234 Startup Avenue, Block B, Innovation Park, Mumbai, Maharashtra, 400001"
            value={companyAddressField.value}
            onChange={(value: string) => dispatchCompanyAddressField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={companyAddressField.errorMessage}
            clearError={() => dispatchCompanyAddressField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={companyAddressField.hasError}
          />
          <TextInput
            label="Company Phone Number"
            placeholder="e.g. +91-9876543210"
            value={companyPhoneNumberField.value}
            onChange={(value: string) => dispatchCompanyPhoneNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={companyPhoneNumberField.errorMessage}
            clearError={() => dispatchCompanyPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={companyPhoneNumberField.hasError}
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
