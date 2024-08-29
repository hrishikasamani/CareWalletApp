import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';


type RootStackParamList = {
  HIPAAAcknowledgement: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'HIPAAAcknowledgement'>;

const HIPAAAcknowledgementScreen: React.FC<Props> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [name1, setName1] = useState('');
  const [relationship1, setRelationship1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship2, setRelationship2] = useState('');
  const [name3, setName3] = useState('');
  const [relationship3, setRelationship3] = useState('');

const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Show picker on iOS
    setDate(currentDate);
  };

  const handleSubmit = () => {
    navigation.navigate('Home');
  };
 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>HIPAA Acknowledgement</Text>
      <Text style={styles.text}>
        WE ARE REQUIRED TO PROVIDE YOU WITH A COPY OF OUR NOTICE OF PRIVACY PRACTICES, WHICH STATES HOW WE MAY USE AND/OR DISCLOSE YOUR HEALTH INFORMATION. PLEASE SIGN THIS FORM TO ACKNOWLEDGE RECEIPT OF THE NOTICE. ALSO PLEASE FILL OUT THE BOTTOM OF THE FORM WITH THE NAME/S OF THE PEOPLE YOU GIVE US PERMISSION TO RELEASE ANY HEALTH INFORMATION TO.
      </Text>
      <Text style={styles.text}>
        I ACKNOWLEDGE THAT I HAVE RECEIVED AND UNDERSTAND THE OFFICE'S NOTICE OF PRIVACY PRACTICES.
      </Text>
      <Text style={styles.label}>Signature:</Text>
      <TextInput style={styles.input} placeholder="Sign here" />
      <Text style={styles.label}>Date:</Text>
      <Button title="Select Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.date}>{date.toDateString()}</Text>

      <Text style={styles.text}>
        I AUTHORIZE ANIKET CHAKRABARTI, M.D. P.C. AND STAFF TO RELEASE MY MEDICAL INFORMATION TO THE FOLLOWING:
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Name and Relationship 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name1}
          onChangeText={setName1}
        />
        <TextInput
          style={styles.input}
          placeholder="Relationship"
          value={relationship1}
          onChangeText={setRelationship1}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Name and Relationship 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name2}
          onChangeText={setName2}
        />
        <TextInput
          style={styles.input}
          placeholder="Relationship"
          value={relationship2}
          onChangeText={setRelationship2}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Name and Relationship 3:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name3}
          onChangeText={setName3}
        />
        <TextInput
          style={styles.input}
          placeholder="Relationship"
          value={relationship3}
          onChangeText={setRelationship3}
        />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
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
  section: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default HIPAAAcknowledgementScreen;


     
    