import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EasyMedical</Text>
      
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('PatientForm')}
      >
        <Text style={styles.boxText}>Patient Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('HealthQuestionnaire')}
      >
        <Text style={styles.boxText}>Health Questionnaire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('HIPAAAcknowledgement')}
      >
        <Text style={styles.boxText}>HIPAA Acknowledgement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('FinancialInformation')}
      >
        <Text style={styles.boxText}>Financial Information</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },
  boxText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;

