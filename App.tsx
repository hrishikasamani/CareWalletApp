import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';
import PatientFormScreen from './src/screens/PatientFormScreen';
import FormSubmissionScreen from './src/screens/FormSubmissionScreen';

type RootStackParamList = {
  PatientForm: undefined;
  FormSubmission: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PatientForm">
          <Stack.Screen
            name="PatientForm"
            component={PatientFormScreen}
            options={{ title: 'Patient Form' }}
          />
          <Stack.Screen
            name="FormSubmission"
            component={FormSubmissionScreen}
            options={{ title: 'Form Submission' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

