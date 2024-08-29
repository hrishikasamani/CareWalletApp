import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  FormConfirmation: {
    patientInfo: {
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
    };
  };
};

type Props = StackScreenProps<RootStackParamList, 'FormConfirmation'>;

const FormConfirmationScreen: React.FC<Props> = ({ navigation, route }) => {
  const { patientInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All forms have been successfully submitted! Thank you.</Text>
      <Text style={styles.info}>Name: {patientInfo.firstName}</Text>
      <Text style={styles.info}>Sex: {patientInfo.sex}</Text>
      <Text style={styles.info}>Date of Birth: {patientInfo.dob}</Text>
      <Text style={styles.info}>Age: {patientInfo.age}</Text>
      <Text style={styles.info}>Contact Number: {patientInfo.contactNumber}</Text>
      
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    },
});

export default FormConfirmationScreen;