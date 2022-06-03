import * as React from 'react';
import { Text, View, Pressable, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";



// check JWT to see if user is logged in, if not send to signup/login


// add light/dark mode toggle

// change username

// change password

// update email

// delete account

// sign out function and button


// function Account({ navigation }) {
//   return (
//     <View 
//       // eslint-disable-next-line react-native/no-inline-styles
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>This is your account!</Text>
//       <Pressable
//         title='Log In'
//         onPress={() => navigation.navigate('Dash')}
//       />
//     </View>
//   );
// }

function Account({ navigation }) {

    return (
      <SafeAreaView style={styles.container} >
         <ScrollView style={styles.scrollView}>
          <Text style={styles.titleText}>Username:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type your username here"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
          <Text style={styles.titleText}>Password:</Text>
          <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Type password here"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />
          {/* <Text style={styles.titleText}>Email:</Text>
          <TextInput
          style={styles.input}
          placeholder="Type description here (230 char max)"
          placeholderTextColor="cadetblue"
          keyboardType="numeric"
          focusable={true}
          />       */}
     
          <TouchableOpacity
               style = {styles.submitButton}
              onPress = {() => navigation.navigate('Dash')}
              >
               <Text style = {styles.submitButtonText}> Log In </Text>
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


export default Account;