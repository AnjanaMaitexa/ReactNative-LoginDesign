import {
  Button,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Loginpng from '../assets/images.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export default function Login({navigation}: LoginProps) {
  const screenWidth = Dimensions.get('window').width;
  const [text, setText] = useState(''); // Initialize the state with an empty string

  const handleTextInputChange = () => {
    // Update the 'text' state with the new text
  };
  const handleButtonPress = () => {
    // Use the 'text' state value wherever needed
    console.log('Text entered:', text);
  };

  return (
    <View style={styles.container}>
      <Image source={Loginpng} style={styles.imagestyle}></Image>
      <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="Username"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"
        value={text} // Bind the 'TextInput' value to the 'text' state
        onChangeText={handleTextInputChange} // Handle text input changes
      ></TextInput>
      <TextInput
        style={[styles.inputstyle, {width: screenWidth - 20}]}
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        selectionColor="#FFFFFF"></TextInput>
      <View style={[styles.forgotPasswordContainer, {width: screenWidth - 20}]}>
        <TouchableOpacity
          onPress={handleTextInputChange}
          style={styles.touchableTextContainer}>
          <Text style={styles.touchableText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: screenWidth - 20}}>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.forgotPasswordContainer, {width: screenWidth - 20}]}>
        <TouchableOpacity
          onPress={() => navigation.push('SignUp')}
          style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
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
