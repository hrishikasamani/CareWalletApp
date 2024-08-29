import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper';

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
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [Illness, setIllness] = useState('None');
  const [Exercise, setExercise] = useState('None');
  const [previousDoctor, setPreviousDoctor] = useState('');
  const [lastPhysicalExam, setLastPhysicalExam] = useState('');
  const [referral, setReferral] = useState('');
  const [medicalProblems, setMedicalProblems] = useState('');
  const [year, setYear] = useState('');
  const [reason, setReason] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodTransfusion, setBloodTransfusion] = useState('No');
  const [drug, setDrug] = useState('');
  const [strength, setStrength] = useState('');
  const [frequency, setFrequency] = useState('');
  const [allergyDrug, setAllergyDrug] = useState('');
  const [reaction, setReaction] = useState('');
  const [diet, setDiet] = useState('');
  const [meals, setMeals] = useState('');
  const [salt, setSalt] = useState('');
  const [fat, setFat] = useState('');
  const [caf, setCaf] = useState('');
  const [cups, setCups] = useState('');

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
      </View>

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
      <Text style={styles.label}>Childhood Illness</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Measles"
          status={Illness === 'Measles' ? 'checked' : 'unchecked'}
          onPress={() => setIllness('Measles')}
        />
        <Text style={styles.radioLabel}>Measles</Text>
        <RadioButton
          value="Polio"
          status={Illness === 'Polio' ? 'checked' : 'unchecked'}
          onPress={() => setIllness('Polio')}
        />
        <Text style={styles.radioLabel}>Polio</Text>
        <RadioButton
          value="None"
          status={Illness === 'None' ? 'checked' : 'unchecked'}
          onPress={() => setIllness('None')}
        />
        <Text style={styles.radioLabel}>None</Text>
      </View>

      <Text style={styles.label}>List Any Medical Problems That Other Doctors Have Diagnosed:</Text>
      <TextInput
        style={styles.textarea}
        value={medicalProblems}
        onChangeText={setMedicalProblems}
        placeholder="Describe any medical problems"
        multiline={true}
      />

      <Text style={styles.label}>Any Past Operations, Surgeries or Emergency Room Visits:</Text>
      <TextInput
        style={styles.input}
        value={year}
        onChangeText={setYear}
        placeholder="Year"
      />
      <TextInput
        style={styles.input}
        value={reason}
        onChangeText={setReason}
        placeholder="Reason"
      />
      <TextInput
        style={styles.input}
        value={hospital}
        onChangeText={setHospital}
        placeholder="Hospital"
      />

      <Text style={styles.label}>Have you ever had a blood transfusion?</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Yes"
          status={bloodTransfusion === 'Yes' ? 'checked' : 'unchecked'}
          onPress={() => setBloodTransfusion('Yes')}
        />
        <Text style={styles.radioLabel}>Yes</Text>
        <RadioButton
          value="No"
          status={bloodTransfusion === 'No' ? 'checked' : 'unchecked'}
          onPress={() => setBloodTransfusion('No')}
        />
        <Text style={styles.radioLabel}>No</Text>
      </View>

      <Text style={styles.label}>List Your Prescribed Drugs and Over-the-Counter Drugs, Such as Vitamins and Inhalers:</Text>
      <TextInput
        style={styles.input}
        value={drug}
        onChangeText={setDrug}
        placeholder="Name the Drug"
      />
      <TextInput
        style={styles.input}
        value={strength}
        onChangeText={setStrength}
        placeholder="Strength"
      />
      <TextInput
        style={styles.input}
        value={frequency}
        onChangeText={setFrequency}
        placeholder="Frequency Taken"
      />

      <Text style={styles.label}>Allergies to Medications:</Text>
      <TextInput
        style={styles.input}
        value={allergyDrug}
        onChangeText={setAllergyDrug}
        placeholder="Name the Drug"
      />
      <TextInput
        style={styles.input}
        value={reaction}
        onChangeText={setReaction}
        placeholder="Reaction you had"
      />

<Text style={styles.sectionTitle}>Health Habits and Personal Safety</Text>
<Text style={styles.label}>Exercise</Text>
    <View style={styles.container}>
      <Text style={styles.label}>Exercise:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Sedentary"
          status={Exercise === 'Sedentary' ? 'checked' : 'unchecked'}
          onPress={() => setExercise('Sedentary')}
        />
        <Text style={styles.radioLabel}>Sedentary (No Exercise)</Text>
        </View>
        <View style={styles.radioContainer}>
        <RadioButton
          value="Mild"
          status={Exercise === 'Mild' ? 'checked' : 'unchecked'}
          onPress={() => setExercise('Mild')}
        />
        <Text style={styles.radioLabel}>Mild Exercise (i.e., climb stairs, walk)</Text>
        </View>
        <View style={styles.radioContainer}>
        <RadioButton
          value="Vigorous"
          status={Exercise === 'Vigorous' ? 'checked' : 'unchecked'}
          onPress={() => setExercise('Vigorous')}
        />
        <Text style={styles.radioLabel}>Occasional Vigorous Exercise (i.e work or recreation)</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton
          value="RegularVigorous"
          status={Exercise === 'RegularVigorous' ? 'checked' : 'unchecked'}
          onPress={() => setExercise('RegularVigorous')}
        />
        <Text style={styles.radioLabel}>Regular Vigorous Exercise (i.e work or recreation)</Text>
      </View>
    </View>
    <Text style={styles.label}>Diet</Text>
    <View style={styles.container}>
      <Text style={styles.label}>Are you on a diet?</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Yes"
          status={diet === 'Yes' ? 'checked' : 'unchecked'}
          onPress={() => setDiet('Yes')}
        />
        <Text style={styles.radioLabel}>Yes</Text>
        <RadioButton
          value="No"
          status={diet === 'No' ? 'checked' : 'unchecked'}
          onPress={() => setDiet('No')}
        />
        <Text style={styles.radioLabel}>No</Text>
        </View>
        <Text style={styles.label}># Of meals you eat in an everage day?</Text>
      <TextInput
        style={styles.input}
        value={meals}
        onChangeText={setMeals}
        placeholder="Number of meals"
      />
      <Text style={styles.label}>Rank Salt Intake</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="High"
          status={salt === 'High' ? 'checked' : 'unchecked'}
          onPress={() => setSalt('High')}
        />
        <Text style={styles.radioLabel}>High</Text>
        <RadioButton
          value="Medium"
          status={salt === 'Medium' ? 'checked' : 'unchecked'}
          onPress={() => setSalt('Medium')}
        />
        <Text style={styles.radioLabel}>Medium</Text>
        <RadioButton
          value="Low"
          status={salt === 'Low' ? 'checked' : 'unchecked'}
          onPress={() => setSalt('Low')}
        />
        <Text style={styles.radioLabel}>Low</Text>
        </View>
      <Text style={styles.label}>Rank Fat Intake</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="High"
          status={fat === 'High' ? 'checked' : 'unchecked'}
          onPress={() => setFat('High')}
        />
        <Text style={styles.radioLabel}>High</Text>
        <RadioButton
          value="Medium"
          status={fat === 'Medium' ? 'checked' : 'unchecked'}
          onPress={() => setFat('Medium')}
        />
        <Text style={styles.radioLabel}>Medium</Text>
        <RadioButton
          value="Low"
          status={fat === 'Low' ? 'checked' : 'unchecked'}
          onPress={() => setFat('Low')}
        />
        <Text style={styles.radioLabel}>Low</Text>
        </View>
    </View>

    <Text style={styles.label}>Caffeine</Text>
    <View style={styles.container}>
      <Text style={styles.label}>Caffeine:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="None"
          status={caf === 'None' ? 'checked' : 'unchecked'}
          onPress={() => setCaf('None')}
        />
        <Text style={styles.radioLabel}>None</Text>
        <RadioButton
          value="Tea"
          status={caf === 'Tea' ? 'checked' : 'unchecked'}
          onPress={() => setCaf('Tea')}
        />
        <Text style={styles.radioLabel}>Tea</Text>
        <RadioButton
          value="Coffee"
          status={caf === 'Coffee' ? 'checked' : 'unchecked'}
          onPress={() => setCaf('Coffee')}
        />
        <Text style={styles.radioLabel}>Coffee</Text>
        </View>
        <Text style={styles.label}># Of cups/cans per day?</Text>
      <TextInput
        style={styles.input}
        value={cups}
        onChangeText={setCups}
        placeholder="Number of cups"
      />
    </View>
    <Text style={styles.sectionTitle}>Please read and remember that the following recommendations are very important to maintaining your health.</Text>
    <Text style={styles.label}>When in a car, wear your safety belt at all times. While riding a motorcycle or bicycle, wear a helmet.
    Always have functional smoke detectors and fire extinguishers in your home.
    If you own a firearm, make sure that it is accessible only to you.
    Take every precaution to ensure that children do not have access to a loaded firearm.
    Keep the firearm and ammunition in separate locations.</Text>
    <View style={styles.thanks}>
    <Text style={styles.thanks}>-- Thank you</Text>
    </View>
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioLabel: {
    fontSize: 18,
    marginRight: 20,
  },
  thanks: {
    alignItems: 'flex-end',
    fontSize: 18,
  }
});

export default HealthQuestionnaireScreen;
