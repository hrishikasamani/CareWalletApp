import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    HealthQuestionnaire: undefined;
    FormConfirmation: {
        patientInfo: {
            firstName: string;
            middleName: string;
            lastName: string;
            age: string;
            contactNumber: string;
        };
    };
};

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'HealthQuestionnaire'>;
};

const HealthQuestionnaireScreen: React.FC<Props> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [previousDoctor, setPreviousDoctor] = useState('');
  const [lastPhysicalExam, setLastPhysicalExam] = useState('');
  const [referral, setReferral] = useState('');
  const [medicalProblems, setMedicalProblems] = useState('');
  const [surgeries, setSurgeries] = useState('');
  const [bloodTransfusion, setBloodTransfusion] = useState('');
  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleSubmit = () => {
    // Navigate to the Home screen after submission
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health History Questionnaire</Text>
      <Text style={styles.subtitle}>All questions contained in this questionnaire are strictly confidential and will become part of your medical record.</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={middleName}
        onChangeText={setMiddleName}
        placeholder="Middle Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />

      <Text style={styles.label}>Date of Birth (MM-DD-YYYY):</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="MM-DD-YYYY"
      />

      <Text style={styles.label}>Marital Status:</Text>
      <TextInput
        style={styles.input}
        value={maritalStatus}
        onChangeText={setMaritalStatus}
        placeholder="Single, Married, etc."
      />

      <Text style={styles.label}>Previous Doctor(s):</Text>
      <TextInput
        style={styles.input}
        value={previousDoctor}
        onChangeText={setPreviousDoctor}
        placeholder="Doctor's Name"
      />

      <Text style={styles.label}>Date of Last Physical Exam:</Text>
      <TextInput
        style={styles.input}
        value={lastPhysicalExam}
        onChangeText={setLastPhysicalExam}
        placeholder="MM-DD-YYYY"
      />

      <Text style={styles.label}>Whom May We Thank For This Referral?</Text>
      <TextInput
        style={styles.input}
        value={referral}
        onChangeText={setReferral}
        placeholder="Referral Name"
      />

      <Text style={styles.sectionTitle}>Personal Health History</Text>

      <Text style={styles.label}>List Any Medical Problems That Other Doctors Have Diagnosed:</Text>
      <TextInput
        style={styles.textarea}
        value={medicalProblems}
        onChangeText={setMedicalProblems}
        placeholder="Describe any medical problems"
        multiline={true}
      />

      <Text style={styles.label}>Any Past Operations or Surgeries:</Text>
      <TextInput
        style={styles.textarea}
        value={surgeries}
        onChangeText={setSurgeries}
        placeholder="Year, Reason, Hospital"
        multiline={true}
      />

      <Text style={styles.label}>Have you ever had a blood transfusion?</Text>
      <TextInput
        style={styles.input}
        value={bloodTransfusion}
        onChangeText={setBloodTransfusion}
        placeholder="Yes or No"
      />

      <Text style={styles.label}>List Your Prescribed Drugs and Over-the-Counter Drugs, Such as Vitamins and Inhalers:</Text>
      <TextInput
        style={styles.textarea}
        value={medications}
        onChangeText={setMedications}
        placeholder="Name the Drug, Strength, Frequency Taken"
        multiline={true}
      />

      <Text style={styles.label}>Allergies to Medications:</Text>
      <TextInput
        style={styles.textarea}
        value={allergies}
        onChangeText={setAllergies}
        placeholder="Name the Drug, Reaction you had"
        multiline={true}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
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
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
    height: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HealthQuestionnaireScreen;
