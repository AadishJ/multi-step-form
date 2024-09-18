import { createContext, useReducer, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type Field = {
  value: string;
  hasError: boolean;
  errorMessage: string;
};

const initialState: Field = {
  value: '',
  hasError: false,
  errorMessage: '',
};

type FormContextData = {
  // Personal Information Fields
  nameField: Field;
  emailField: Field;
  phoneNumberField: Field;

  // Company Information Fields
  startupNameField: Field;
  incorporationDateField: Field;
  entityTypeField: Field;
  industrySectorField: Field;
  incorporationNumberField: Field;
  registrationDateField: Field;
  companyAddressField: Field;
  companyPhoneNumberField: Field;

  // Address Fields
  addressLine1Field: Field;
  addressLine2Field: Field;
  addressLine3Field: Field;
  cityField: Field;
  stateField: Field;
  pinCodeField: Field;
  districtField: Field;
  subDistrictField: Field;

  // Authorized Representative Details
  representativeNameField: Field;
  representativeDesignationField: Field;
  representativeMobileField: Field;
  representativeEmailField: Field;

  // Business Details Fields
  briefDescriptionField: Field;
  websiteURLField: Field;
  stageOfBusinessField: Field;
  fundingDetailsField: Field;

  // Legal and Compliance Document Fields
  certificateOfIncorporationField: Field;
  panTanField: Field;
  gstRegistrationField: Field;
  patentField: Field;
  trademarkField: Field;

  // Dispatch Functions
  dispatchNameField: React.Dispatch<any>;
  dispatchEmailField: React.Dispatch<any>;
  dispatchPhoneNumberField: React.Dispatch<any>;

  dispatchStartupNameField: React.Dispatch<any>;
  dispatchIncorporationDateField: React.Dispatch<any>;
  dispatchEntityTypeField: React.Dispatch<any>;
  dispatchIndustrySectorField: React.Dispatch<any>;
  dispatchIncorporationNumberField: React.Dispatch<any>;
  dispatchRegistrationDateField: React.Dispatch<any>;
  dispatchCompanyAddressField: React.Dispatch<any>;
  dispatchCompanyPhoneNumberField: React.Dispatch<any>;

  dispatchAddressLine1Field: React.Dispatch<any>;
  dispatchAddressLine2Field: React.Dispatch<any>;
  dispatchAddressLine3Field: React.Dispatch<any>;
  dispatchCityField: React.Dispatch<any>;
  dispatchStateField: React.Dispatch<any>;
  dispatchPinCodeField: React.Dispatch<any>;
  dispatchDistrictField: React.Dispatch<any>;
  dispatchSubDistrictField: React.Dispatch<any>;

  dispatchRepresentativeNameField: React.Dispatch<any>;
  dispatchRepresentativeDesignationField: React.Dispatch<any>;
  dispatchRepresentativeMobileField: React.Dispatch<any>;
  dispatchRepresentativeEmailField: React.Dispatch<any>;

    // Dispatch Functions
    dispatchBriefDescriptionField: React.Dispatch<any>;
    dispatchWebsiteURLField: React.Dispatch<any>;
    dispatchStageOfBusinessField: React.Dispatch<any>;
  dispatchFundingDetailsField: React.Dispatch<any>;
    
   // Dispatch Functions for Legal and Compliance Document Fields
   dispatchCertificateOfIncorporationField: React.Dispatch<any>;
   dispatchPanTanField: React.Dispatch<any>;
   dispatchGstRegistrationField: React.Dispatch<any>;
   dispatchPatentField: React.Dispatch<any>;
   dispatchTrademarkField: React.Dispatch<any>;

  

  clearForm: () => void;
};

export const FormContext = createContext<FormContextData>({
  nameField: initialState,
  emailField: initialState,
  phoneNumberField: initialState,

  startupNameField: initialState,
  incorporationDateField: initialState,
  entityTypeField: initialState,
  industrySectorField: initialState,
  incorporationNumberField: initialState,
  registrationDateField: initialState,
  companyAddressField: initialState,
  companyPhoneNumberField: initialState,

  addressLine1Field: initialState,
  addressLine2Field: initialState,
  addressLine3Field: initialState,
  cityField: initialState,
  stateField: initialState,
  pinCodeField: initialState,
  districtField: initialState,
  subDistrictField: initialState,

  representativeNameField: initialState,
  representativeDesignationField: initialState,
  representativeMobileField: initialState,
  representativeEmailField: initialState,

  briefDescriptionField: initialState,
  websiteURLField: initialState,
  stageOfBusinessField: initialState,
  fundingDetailsField: initialState,

   // Initial values for Legal and Compliance Document Fields
   certificateOfIncorporationField: initialState,
   panTanField: initialState,
   gstRegistrationField: initialState,
   patentField: initialState,
   trademarkField: initialState,

  dispatchNameField: () => {},
  dispatchEmailField: () => {},
  dispatchPhoneNumberField: () => {},

  dispatchStartupNameField: () => {},
  dispatchIncorporationDateField: () => {},
  dispatchEntityTypeField: () => {},
  dispatchIndustrySectorField: () => {},
  dispatchIncorporationNumberField: () => {},
  dispatchRegistrationDateField: () => {},
  dispatchCompanyAddressField: () => {},
  dispatchCompanyPhoneNumberField: () => {},

  dispatchAddressLine1Field: () => {},
  dispatchAddressLine2Field: () => {},
  dispatchAddressLine3Field: () => {},
  dispatchCityField: () => {},
  dispatchStateField: () => {},
  dispatchPinCodeField: () => {},
  dispatchDistrictField: () => {},
  dispatchSubDistrictField: () => { },
  
  // Initial dispatch functions for Legal and Compliance Document Fields
  dispatchCertificateOfIncorporationField: () => {},
  dispatchPanTanField: () => {},
  dispatchGstRegistrationField: () => {},
  dispatchPatentField: () => {},
  dispatchTrademarkField: () => {},


  dispatchRepresentativeNameField: () => {},
  dispatchRepresentativeDesignationField: () => {},
  dispatchRepresentativeMobileField: () => {},
  dispatchRepresentativeEmailField: () => { },
  
  dispatchBriefDescriptionField: ()=>{},
  dispatchWebsiteURLField: ()=>{},
  dispatchStageOfBusinessField: ()=>{},
  dispatchFundingDetailsField: ()=>{},

  clearForm: () => {},
});

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

function handleFormState(state: Field, action: any) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: '',
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage,
      };
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        hasError: false,
        errorMessage: '',
      };
    default:
      return state;
  }
}

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  // Personal Information Fields
  const [nameField, dispatchNameField] = useReducer(handleFormState, initialState);
  const [emailField, dispatchEmailField] = useReducer(handleFormState, initialState);
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(handleFormState, initialState);

  // Company Information Fields
  const [startupNameField, dispatchStartupNameField] = useReducer(handleFormState, initialState);
  const [incorporationDateField, dispatchIncorporationDateField] = useReducer(handleFormState, initialState);
  const [entityTypeField, dispatchEntityTypeField] = useReducer(handleFormState, initialState);
  const [industrySectorField, dispatchIndustrySectorField] = useReducer(handleFormState, initialState);
  const [incorporationNumberField, dispatchIncorporationNumberField] = useReducer(handleFormState, initialState);
  const [registrationDateField, dispatchRegistrationDateField] = useReducer(handleFormState, initialState);
  const [companyAddressField, dispatchCompanyAddressField] = useReducer(handleFormState, initialState);
  const [companyPhoneNumberField, dispatchCompanyPhoneNumberField] = useReducer(handleFormState, initialState);

  const [certificateOfIncorporationField, dispatchCertificateOfIncorporationField] = useReducer(handleFormState, initialState);
  const [panTanField, dispatchPanTanField] = useReducer(handleFormState, initialState);
  const [gstRegistrationField, dispatchGstRegistrationField] = useReducer(handleFormState, initialState);
  const [patentField, dispatchPatentField] = useReducer(handleFormState, initialState);
  const [trademarkField, dispatchTrademarkField] = useReducer(handleFormState, initialState);


  // Address Fields
  const [addressLine1Field, dispatchAddressLine1Field] = useReducer(handleFormState, initialState);
  const [addressLine2Field, dispatchAddressLine2Field] = useReducer(handleFormState, initialState);
  const [addressLine3Field, dispatchAddressLine3Field] = useReducer(handleFormState, initialState);
  const [cityField, dispatchCityField] = useReducer(handleFormState, initialState);
  const [stateField, dispatchStateField] = useReducer(handleFormState, initialState);
  const [pinCodeField, dispatchPinCodeField] = useReducer(handleFormState, initialState);
  const [districtField, dispatchDistrictField] = useReducer(handleFormState, initialState);
  const [subDistrictField, dispatchSubDistrictField] = useReducer(handleFormState, initialState);

  // Authorized Representative Details
  const [representativeNameField, dispatchRepresentativeNameField] = useReducer(handleFormState, initialState);
  const [representativeDesignationField, dispatchRepresentativeDesignationField] = useReducer(handleFormState, initialState);
  const [representativeMobileField, dispatchRepresentativeMobileField] = useReducer(handleFormState, initialState);
  const [representativeEmailField, dispatchRepresentativeEmailField] = useReducer(handleFormState, initialState);

   // Business Details Fields
   const [briefDescriptionField, dispatchBriefDescriptionField] = useReducer(handleFormState, initialState);
   const [websiteURLField, dispatchWebsiteURLField] = useReducer(handleFormState, initialState);
   const [stageOfBusinessField, dispatchStageOfBusinessField] = useReducer(handleFormState, initialState);
   const [fundingDetailsField, dispatchFundingDetailsField] = useReducer(handleFormState, initialState);
 
  const { getValueFromLocalStorage, removeValueFromLocalStorage } = useLocalStorage();

  function clearForm() {
    removeValueFromLocalStorage('your-info');
    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' });

    dispatchStartupNameField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchIncorporationDateField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchEntityTypeField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchIndustrySectorField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchIncorporationNumberField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchRegistrationDateField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchCompanyAddressField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchCompanyPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' });

    dispatchAddressLine1Field({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchAddressLine2Field({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchAddressLine3Field({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchCityField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchStateField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchPinCodeField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchDistrictField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchSubDistrictField({ type: ACTIONS.SET_VALUE, value: '' });

    dispatchRepresentativeNameField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchRepresentativeDesignationField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchRepresentativeMobileField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchRepresentativeEmailField({ type: ACTIONS.SET_VALUE, value: '' });
  
    dispatchBriefDescriptionField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchWebsiteURLField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchStageOfBusinessField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchFundingDetailsField({ type: ACTIONS.SET_VALUE, value: '' });

     // Reset Legal and Compliance Document Fields
     dispatchCertificateOfIncorporationField({ type: ACTIONS.SET_VALUE, value: '' });
     dispatchPanTanField({ type: ACTIONS.SET_VALUE, value: '' });
     dispatchGstRegistrationField({ type: ACTIONS.SET_VALUE, value: '' });
     dispatchPatentField({ type: ACTIONS.SET_VALUE, value: '' });
     dispatchTrademarkField({ type: ACTIONS.SET_VALUE, value: '' });
  }

  const value = {
    nameField,
    emailField,
    phoneNumberField,

    startupNameField,
    incorporationDateField,
    entityTypeField,
    industrySectorField,
    incorporationNumberField,
    registrationDateField,
    companyAddressField,
    companyPhoneNumberField,

    addressLine1Field,
    addressLine2Field,
    addressLine3Field,
    cityField,
    stateField,
    pinCodeField,
    districtField,
    subDistrictField,

    representativeNameField,
    representativeDesignationField,
    representativeMobileField,
    representativeEmailField,

    briefDescriptionField,
    websiteURLField,
    stageOfBusinessField,
    fundingDetailsField,

     // Legal and Compliance Document Fields
     certificateOfIncorporationField,
     panTanField,
     gstRegistrationField,
     patentField,
     trademarkField,
 
     // Dispatch functions for Legal and Compliance Document Fields
     dispatchCertificateOfIncorporationField,
     dispatchPanTanField,
     dispatchGstRegistrationField,
     dispatchPatentField,
     dispatchTrademarkField,

    dispatchNameField,
    dispatchEmailField,
    dispatchPhoneNumberField,

    dispatchStartupNameField,
    dispatchIncorporationDateField,
    dispatchEntityTypeField,
    dispatchIndustrySectorField,
    dispatchIncorporationNumberField,
    dispatchRegistrationDateField,
    dispatchCompanyAddressField,
    dispatchCompanyPhoneNumberField,

    dispatchAddressLine1Field,
    dispatchAddressLine2Field,
    dispatchAddressLine3Field,
    dispatchCityField,
    dispatchStateField,
    dispatchPinCodeField,
    dispatchDistrictField,
    dispatchSubDistrictField,

    dispatchRepresentativeNameField,
    dispatchRepresentativeDesignationField,
    dispatchRepresentativeMobileField,
    dispatchRepresentativeEmailField,

    dispatchBriefDescriptionField,
    dispatchWebsiteURLField,
    dispatchStageOfBusinessField,
    dispatchFundingDetailsField,


    clearForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
