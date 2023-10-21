import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Loginpng from '../assets/images.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';
import Login from './Login';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export default function SignUp({navigation}: SignUpProps) {
  const handleTextInputChange = () => {
    // Update the 'text' state with the new text
  };
  const handleButtonPress = () => {
  };
  const screenWidth = Dimensions.get('window').width;
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={Loginpng} style={styles.imagestyle}></Image>
      <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="FullName"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"
        //value={text} // Bind the 'TextInput' value to the 'text' state
        //onChangeText={handleTextInputChange} // Handle text input changes
      ></TextInput>
       <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"
        //value={text} // Bind the 'TextInput' value to the 'text' state
        //onChangeText={handleTextInputChange} // Handle text input changes
      ></TextInput>
       <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="Username"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"
        //value={text} // Bind the 'TextInput' value to the 'text' state
        //onChangeText={handleTextInputChange} // Handle text input changes
      ></TextInput>
      <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"></TextInput>
     
      <View style={{width: screenWidth - 20}}>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.forgotPasswordContainer, {width: screenWidth - 20}]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0059e7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: 300,
    width: 350,
  },
  inputstyle: {
    borderColor: '#FFFFFF', // Border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius (optional for rounded corners)
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 17,
    color: '#FFFFFF',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#81b2ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  touchableTextContainer: {
    alignSelf: 'flex-end', // Align the text to the right end
    marginTop: 10, // Add margin for spacing
  },
  touchableText: {
    color: '#FFFFFF',
  },
  forgotPasswordContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  signupText: {
    color: '#FFFFFF',
  },
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});