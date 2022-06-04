import React, { useState } from 'react';
import { Text, Switch, ScrollView, SafeAreaView,  StyleSheet, TextInput, TouchableOpacity, Button, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

// use moment.js to grab current time and then get the difference
// use function to create ticker element

function TickerForm({ navigation }) {
  const [chosenDate, setChosenDate] = useState(new Date());

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShow(false);
  //   setDate(currentDate);
  // };
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <SafeAreaView style={styles.container} >
         <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>Ticker Title:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type your ticker title here"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
          <Text style={styles.titleText}>Ticker Description:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
      {/* <Text>selected: {date.toLocaleString()}</Text> */}
        <Text style={styles.titleText}>Event Date:</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value= {chosenDate}
          mode="datetime"
          is24Hour={true}
          display= "spinner"
          onDateChange={setChosenDate}
          textColor="cadetblue"
        />
        <Text style={styles.titleText}>{isEnabled ? 'Display: Public' : 'Display: Private'}</Text>
        <Switch
        trackColor={{ false: "#767577", true: "cadetblue" }}
        thumbColor={isEnabled ? "#C5E063" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{marginTop: 10}}
      />
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => navigation.navigate('Dash')}
              >
               <Text style = {styles.submitButtonText}> Create </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      color: '#34403A'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      margin: 20,
    },
    submitButton: {
      backgroundColor: 'cadetblue',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius: 5,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
   },
   titleText: {
     fontSize: 16,
     fontWeight: 'bold',
     color: '#34403A'
   }
});
  
export default TickerForm