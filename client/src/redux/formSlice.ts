import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PatientInfo {
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  sex: string;
  dob: string;
  age: string;
  maidenName: string;
  ssn: string;
  maritalStatus: string;
  address: string;
  contactNumber: string;
}

interface FinancialInfo {
  insuranceProvider?: string;
  policyNumber?: string;
  paymentMethod?: string;
  amountDue?: string;
  generalSignature?: string; // Signature for general financial info
  generalDate?: string; // Date for general financial info
  medicareSignature?: string; // Signature for Medicare-specific info
  medicareDate?: string; // Date for Medicare-specific info
}

interface FormState {
  patientInfo: PatientInfo;
  financialInfo: FinancialInfo;
}

const initialState: FormState = {
  patientInfo: {
    date: '',
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    sex: 'Male',
    dob: '',
    age: '',
    maidenName: '',
    ssn: '',
    maritalStatus: 'Single',
    address: '',
    contactNumber: '',
  },
  financialInfo: {
    insuranceProvider: '',
    policyNumber: '',
    paymentMethod: '',
    amountDue: '',
    generalSignature: '',
    generalDate: '',
    medicareSignature: '',
    medicareDate: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePatientInfo: (state, action: PayloadAction<PatientInfo>) => {
      state.patientInfo = action.payload;
    },
    updateFinancialInfo: (state, action: PayloadAction<FinancialInfo>) => {
      state.financialInfo = action.payload;
    },
  },
});

export const { updatePatientInfo, updateFinancialInfo } = formSlice.actions;
export default formSlice.reducer;

