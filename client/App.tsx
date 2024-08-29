import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import PatientFormScreen from './src/screens/PatientFormScreen';
import FormSubmissionScreen from './src/screens/FormSubmissionScreen';
import FormConfirmationScreen from './src/screens/FormConfirmationScreen';
import HomeScreen from './src/screens/HomeScreen';
import HIPAAAcknowledgementScreen from './src/screens/AcknowledgementScreen';
import FinancialInformationScreen from './src/screens/FinancialInformationScreen';
import HealthQuestionnaireScreen from './src/screens/HealthQuestionnaireScreen';

type RootStackParamList = {
  Home: undefined;
  PatientForm: undefined;
  FormSubmission: {
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
  HIPAAAcknowledgement: undefined; 
  FinancialInformation: undefined;
  HealthQuestionnaire: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="PatientForm"
            component={PatientFormScreen}
            options={{ title: 'Patient Form' }}
          />
          <Stack.Screen
            name="HIPAAAcknowledgement"
            component={HIPAAAcknowledgementScreen}
            options={{ title: 'HIPAA Form' }}
          />
          <Stack.Screen
            name="HealthQuestionnaire"
            component={HealthQuestionnaireScreen}
            options={{ title: 'Health History Questionnaire' }}
          />
          <Stack.Screen
            name="FormSubmission"
            component={FormSubmissionScreen}
            options={{ title: 'Form Submission' }}
          />
          <Stack.Screen
            name="FinancialInformation"
            component={FinancialInformationScreen}
            options={{ title: 'Financial Information' }}
          />
          <Stack.Screen
            name="FormConfirmation"
            component={FormConfirmationScreen}
            options={{ title: 'Form Confirmation' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
