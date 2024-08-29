import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  PatientForm: undefined;
  FormSubmission: { patientInfo: {
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
  }};
  FormConfirmation: { patientInfo: {
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
  }};
};

type FormConfirmationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FormConfirmation'
>;

type FormConfirmationScreenRouteProp = RouteProp<
  RootStackParamList,
  'FormConfirmation'
>;

type Props = {
  navigation: FormConfirmationScreenNavigationProp;
  route: FormConfirmationScreenRouteProp;
};

const FormConfirmationScreen: React.FC<Props> = ({ route, navigation }) => {
  const { patientInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Forms have been Submitted Successfully!</Text>
      <Text style={styles.info}>First Name: {patientInfo.firstName}</Text>
      <Text style={styles.info}>Middle Name: {patientInfo.middleName}</Text>
      <Text style={styles.info}>Last Name: {patientInfo.lastName}</Text>
      <Text style={styles.info}>Preferred Name: {patientInfo.preferredName}</Text>
      <Text style={styles.info}>Sex: {patientInfo.sex}</Text>
      <Text style={styles.info}>Date of Birth: {patientInfo.dob}</Text>
      <Text style={styles.info}>Age: {patientInfo.age}</Text>
      <Text style={styles.info}>Maiden Name: {patientInfo.maidenName}</Text>
      <Text style={styles.info}>Social Security Number: {patientInfo.ssn}</Text>
      <Text style={styles.info}>Marital Status: {patientInfo.maritalStatus}</Text>
      <Text style={styles.info}>Address: {patientInfo.address}</Text>
      <Text style={styles.info}>Contact Number: {patientInfo.contactNumber}</Text>

      <Button
        title="Submit Another Form"
        onPress={() => navigation.navigate('PatientForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default FormConfirmationScreen;
