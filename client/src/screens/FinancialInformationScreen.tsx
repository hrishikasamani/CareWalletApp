import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  FinancialInformation: undefined;
  FormConfirmation: { patientInfo: {
    firstName: string;
    middleName: string;
    lastName: string;
    age: string;
    contactNumber: string;
  }};
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FinancialInformation'>;
};

const FinancialInformationScreen: React.FC<Props> = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [signature, setSignature] = useState('');
  const [medicareSignature, setMedicareSignature] = useState('');
  const [name1, setName1] = useState('');
  const [relationship1, setRelationship1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship2, setRelationship2] = useState('');
  const [name3, setName3] = useState('');
  const [relationship3, setRelationship3] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleSubmit = () => {
    const patientInfo = {
      date: date.toDateString(),
      firstName: '', 
      middleName: '', 
      lastName: '', 
      preferredName: '', 
      sex: '', 
      dob: '', 
      age: '',
      maidenName: '', 
      ssn: '', 
      maritalStatus: '', 
      address: '', 
      contactNumber: '', 
    };

    navigation.navigate('FormConfirmation', { patientInfo });
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Financial Information for All Parties</Text>
      <Text style={styles.paragraph}>
        PLEASE MAKE SURE ALL INFORMATION HAS BEEN FILLED OUT CORRECTLY, IT IS YOUR RESPONSIBILITY TO INFORM THIS OFFICE OF ANY CHANGES, ESPECIALLY IF YOU ARE CHANGING INSURANCE CARRIERS BETWEEN VISITS. PLEASE REMEMBER THAT INSURANCE IS CONSIDERED A METHOD OF REIMBURSEMENT FOR PATIENT FEES PAID TO THE PROVIDER AND IS NOT A SUBSTITUTE FOR PAYMENT. SOME COMPANIES PAY FIXED ALLOWANCES FOR CERTAIN PROCEDURES, AND OTHERS PAY ONLY A PERCENTAGE OF THIS ALLOWANCE. IT IS THEREFORE A GOOD IDEA TO FULLY UNDERSTAND WHAT IS COVERED UNDER YOUR POLICY AND WHAT IS NOT COVERED UNDER YOUR POLICY.
        IF YOU BELONG TO AN HMO OR OTHER MANAGED CARE MEDICAL PLAN, PLEASE CHECK TO SEE THAT WE ARE A PARTICIPATING PROVIDER UNDER THAT PLAN. IF SO, REMEMBER TO GET NECESSARY REFERRALS FROM YOUR PCP TO COVER ANY VISITS AND/OR SURGERY. YOU UNDERSTAND THAT YOU ARE RESPONSIBLE FOR ANY CLAIMS DENIED FOR MISSING REFERRALS.
        THERE IS A THIRTY-FIVE DOLLAR CHARGE FOR RETURNED CHECKS.
        TO THE EXTENT NECESSARY TO DETERMINE LIABILITY FOR PAYMENT, TO OBTAIN REIMBURSEMENT AND/OR ABIDE BY MY INSURANCE COMPANY’S LEGAL REQUEST, I AUTHORIZE DISCLOSURE OF PORTIONS OF MY MEDICAL RECORDS TO MY INSURANCE COMPANY, INCLUDING MEDICARE, MEDICAID, PRIVATE INSURANCE AND OTHER HEALTH PLANS.
        I HEREBY ASSIGN ALL MEDICAL AND SURGICAL BENEFITS, TO INCLUDE MAJOR MEDICAL BENEFITS TO WHICH I AM ENTITLED, INCLUDING MEDICARE, MEDICAID, PRIVATE INSURANCE AND OTHER HEALTH INSURANCE PLANS TO ANIKET CHAKRABARTI, M.D P.C. THIS ASSIGNMENT WILL REMAIN IN EFFECT UNTIL REVOKED IN WRITING. A PHOTOCOPY OF THIS STATEMENT IS TO BE CONSIDERED AS VALID AS AN ORIGINAL. I UNDERSTAND I AM FINANCIALLY RESPONSIBLE FOR ALL CHARGES WHETHER OR NOT PAID BY SAID ASSIGNEES TO RELEASE ALL INFORMATION NECESSARY TO SECURE PAYMENT.
      </Text>

      <Text style={styles.label}>Signature:</Text>
      <TextInput
        style={styles.input}
        value={signature}
        onChangeText={setSignature}
        placeholder="Enter your signature"
      />

      <Text style={styles.label}>Date:</Text>
      <Button title="Select Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.date}>{date.toDateString()}</Text>

      <Text style={styles.heading}>For Medicare Patients Only:</Text>
      <Text style={styles.paragraph}>
        I AUTHORIZE ANY HOLDER OF MEDICAL OR OTHER INFORMATION ABOUT ME TO RELEASE TO THE SOCIAL SECURITY ADMINISTRATION AND HEALTH CARE FINANCING ADMINISTRATION OR ITS INTERMEDIARIES OR CARRIERS ANY INFORMATION NEEDED FOR THIS OR RELATED MEDICARE CLAIM. I PERMIT A COPY OF THIS AUTHORIZATION TO BE USED IN PLACE OF THE ORIGINAL AND REQUEST PAYMENT OF MEDICAL INSURANCE BENEFITS EITHER TO MYSELF OR TO THE PARTY WHO ACCEPTS ASSIGNMENT. I UNDERSTAND IT IS MANDATORY TO NOTIFY THE HEALTH CARE PROVIDER OF ANY OTHER PARTY WHO MAY BE RESPONSIBLE FOR PAYING FOR MY TREATMENT, (SECTION 11288, SOCIAL SECURITY ACT PROVIDES PENALTIES FOR WITHHOLDING THIS INFORMATION). REGULATIONS PERTAINING TO MEDICARE ASSIGNMENT OF BENEFITS APPLY.
      </Text>

      <Text style={styles.label}>Signature:</Text>
      <TextInput
        style={styles.input}
        value={medicareSignature}
        onChangeText={setMedicareSignature}
        placeholder="Enter your signature"
      />

      <Text style={styles.label}>Date:</Text>
      <Button title="Select Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.date}>{date.toDateString()}</Text>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
  },
  date: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default FinancialInformationScreen;
