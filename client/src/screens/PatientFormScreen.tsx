import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import from react-native-paper
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { updatePatientInfo } from '../redux/formSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  PatientForm: undefined;
  FormSubmission: { patientInfo: {
    name: string;
    age: string;
    address: string;
    contactNumber: string;
    date: string;
    firstName: string;
    middleName: string;
    lastName: string;
    preferredName: string;
    sex: string;
    dob: string;
    maidenName: string;
    ssn: string;
    maritalStatus: string;
  }};
};

type Props = NativeStackScreenProps<RootStackParamList, 'PatientForm'>;

const PatientFormScreen: React.FC<Props> = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [sex, setSex] = useState('Male'); // Default value
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [ssn, setSsn] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Single'); // Default value
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const patientInfo = {
      date,
      firstName,
      middleName,
      lastName,
      preferredName,
      sex,
      dob,
      age,
      maidenName,
      ssn,
      maritalStatus,
      address,
      contactNumber,
    };

    dispatch(updatePatientInfo(patientInfo));
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter today's date"
        keyboardType="default"
      />

      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
      />

      <Text style={styles.label}>Middle Name:</Text>
      <TextInput
        style={styles.input}
        value={middleName}
        onChangeText={setMiddleName}
        placeholder="Enter your middle name"
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
      />

      <Text style={styles.label}>Preferred Name:</Text>
      <TextInput
        style={styles.input}
        value={preferredName}
        onChangeText={setPreferredName}
        placeholder="Enter your preferred name"
      />

      <Text style={styles.label}>Sex:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Male"
          status={sex === 'Male' ? 'checked' : 'unchecked'}
          onPress={() => setSex('Male')}
        />
        <Text style={styles.radioLabel}>Male</Text>
        <RadioButton
          value="Female"
          status={sex === 'Female' ? 'checked' : 'unchecked'}
          onPress={() => setSex('Female')}
        />
        <Text style={styles.radioLabel}>Female</Text>
      </View>

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="Enter your date of birth"
        keyboardType="default"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Maiden Name:</Text>
      <TextInput
        style={styles.input}
        value={maidenName}
        onChangeText={setMaidenName}
        placeholder="Enter your maiden name"
      />

      <Text style={styles.label}>Social Security Number:</Text>
      <TextInput
        style={styles.input}
        value={ssn}
        onChangeText={setSsn}
        placeholder="Enter your social security number"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Marital Status:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Single"
          status={maritalStatus === 'Single' ? 'checked' : 'unchecked'}
          onPress={() => setMaritalStatus('Single')}
        />
        <Text style={styles.radioLabel}>Single</Text>
        <RadioButton
          value="Married"
          status={maritalStatus === 'Married' ? 'checked' : 'unchecked'}
          onPress={() => setMaritalStatus('Married')}
        />
        <Text style={styles.radioLabel}>Married</Text>
        <RadioButton
          value="Divorced"
          status={maritalStatus === 'Divorced' ? 'checked' : 'unchecked'}
          onPress={() => setMaritalStatus('Divorced')}
        />
        <Text style={styles.radioLabel}>Divorced</Text>
        <RadioButton
          value="Widowed"
          status={maritalStatus === 'Widowed' ? 'checked' : 'unchecked'}
          onPress={() => setMaritalStatus('Widowed')}
        />
        <Text style={styles.radioLabel}>Widowed</Text>
      </View>

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <Text style={styles.label}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        placeholder="Enter your contact number"
        keyboardType="phone-pad"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioLabel: {
    fontSize: 18,
    marginRight: 20,
  },
});

export default PatientFormScreen;
