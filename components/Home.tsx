import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Loginpng from '../assets/images.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}:HomeProps) => {
    const screenWidth = Dimensions.get('window').width;
    const handleButtonPress = () => {
      };
    
  return (
  
   <View style={styles.container}>
          <Image source={Loginpng} style={styles.imagestyle}></Image>
          <Text style={styles.textStyle}>Let's Put your creativity on the{'\n'}       development highway</Text>
           
           <View style={styles.buttonContainer} >
        <TouchableOpacity
          onPress={() => navigation.push('Login')}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>SignIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('SignUp')}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>SignUp</Text>
        </TouchableOpacity>
      
           </View>
         
        </View>
      );
    
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0059e7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
      },
      imagestyle: {
        height: 300,
        width: 350,
      },
      textStyle: {
        color:'#ffffff',
        marginBottom:10
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: '#81b2ff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        flex:1,
        margin:1
      },
      appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
      },
      buttonContainer:{
        flexDirection:'row',
      }
    });
    