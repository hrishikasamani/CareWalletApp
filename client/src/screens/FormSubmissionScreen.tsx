// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { submitFormData } from '../api/formApi'; // Make sure the path is correct

// type RootStackParamList = {
//   PatientForm: undefined;
//   FormSubmission: undefined;
//   FormConfirmation: { patientInfo: any }; // Adjust according to your data
// };

// // Define the navigation prop type for this screen
// type FormSubmissionScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'FormSubmission'
// >;
// type Props = {
//   navigation: FormSubmissionScreenNavigationProp;
// };

// const FormSubmissionScreen: React.FC<Props> = ({ navigation }) => {
//   const [patientInfo, setPatientInfo] = useState({
//     name: '',
//     age: '',
//     address: '',
//     contactNumber: '',
//     date: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     preferredName: '',
//     sex: '',
//     dob: '',
//     maidenName: '',
//     ssn: '',
//     maritalStatus: '',
//   });


//   const handleSubmit = async () => {
//     try {
//       // Submit the form data to the backend
//       await submitFormData(patientInfo);
      
//       // Navigate to FormConfirmationScreen and pass the patientInfo
//       navigation.navigate('FormConfirmation', { patientInfo });
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Submit Your Information</Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={patientInfo.name}
//         onChangeText={(text) => setPatientInfo({ ...patientInfo, name: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={patientInfo.age}
//         onChangeText={(text) => setPatientInfo({ ...patientInfo, age: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         value={patientInfo.address}
//         onChangeText={(text) => setPatientInfo({ ...patientInfo, address: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contact Number"
//         value={patientInfo.contactNumber}
//         onChangeText={(text) => setPatientInfo({ ...patientInfo, contactNumber: text })}
//       />
      
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
// });

// export default FormSubmissionScreen;

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { submitFormData } from '../api/formApi'; // Ensure this path is correct

type RootStackParamList = {
  PatientForm: undefined;
  FormSubmission: undefined;
  FormConfirmation: { patientInfo: any }; // Adjust according to your data
};

// Define the navigation prop type for this screen
type FormSubmissionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FormSubmission'
>;
type Props = {
  navigation: FormSubmissionScreenNavigationProp;
};

const FormSubmissionScreen: React.FC<Props> = ({ navigation }) => {
  const [patientInfo, setPatientInfo] = useState({
    date: '',
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
  });

  const handleSubmit = async () => {
    try {
      // Submit the form data to the backend
      await submitFormData(patientInfo);
      
      // Navigate to FormConfirmationScreen and pass the patientInfo
      navigation.navigate('FormConfirmation', { patientInfo });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={patientInfo.date}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, date: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={patientInfo.firstName}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Middle Name"
        value={patientInfo.middleName}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, middleName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={patientInfo.lastName}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferred Name"
        value={patientInfo.preferredName}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, preferredName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Sex"
        value={patientInfo.sex}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, sex: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={patientInfo.dob}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, dob: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={patientInfo.age}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Maiden Name"
        value={patientInfo.maidenName}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, maidenName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Social Security Number"
        value={patientInfo.ssn}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, ssn: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Marital Status"
        value={patientInfo.maritalStatus}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, maritalStatus: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={patientInfo.address}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={patientInfo.contactNumber}
        onChangeText={(text) => setPatientInfo({ ...patientInfo, contactNumber: text })}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default FormSubmissionScreen;

