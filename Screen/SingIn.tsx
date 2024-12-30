/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, StatusBar, useWindowDimensions, Alert } from 'react-native'
import React, { useState } from 'react'
// import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

export default function SingIn() {
  const { navigate, goBack } = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [username,setUsername] = useState('');
  const [Password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const SingUp = () =>{
    try {
      axios.post('https://interviewhub-3ro7.onrender.com/admin/signup',{
         "email" : email,
         "password" : Password,
      }).then((res)=>{
        if(res.data){
          Alert.alert('Successfully Account Created');
          setEmail('')
          setPassword('')
          setUsername('')
          navigate('Login');
        }
      }).catch((e)=>{
        Alert.alert('Already Account Created');
      });
    } catch (error) {
      console.log(error); 
    }
  }

    const {width} = useWindowDimensions();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={[styles.Main,{width:width-'20%'}]}>
        <Image source={require('../assets/image/3dCaroon.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: 200, height: 200, alignSelf: 'center' }}
          resizeMode="contain"
        />
        <Text style={{ marginVertical: 5 }}>username</Text>

        <View  style={[styles.InputType]} >
          <TextInput
          style={[styles.Input]}
          placeholder='Enter username' 
          onChangeText={setUsername}
          value={username}
          />
        </View>

        <Text style={{ marginVertical: 5 }}>Email</Text>
        <View style={[styles.InputType]} >
          <TextInput 
          style={[styles.Input]}
          placeholder='Enter Email' 
          value={email}
          onChangeText={setEmail}
          />
        </View>

        <Text style={{ marginVertical: 5 }}>Password</Text>
        <View style={styles.InputType}>
          <TextInput
          style={styles.Input}
          placeholder='Enter Password' 
          onChangeText={setPassword}
          value={Password}
          />
        </View>
        <TouchableOpacity>
          <Text style={{ textAlign: 'right', marginBottom: 40 }}>Forgot Password?</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.BTN} onPress={()=>SingUp()}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '600' }}>Singin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50, marginTop: 20 }}>
        <TouchableOpacity style={styles.AuthIcon}>
          <Image source={require('../assets/image/Facebook.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.AuthIcon}>
          <Image source={require('../assets/image/Google.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.AuthIcon}>
          <Image source={require('../assets/image/Twitter.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', width: '99%', justifyContent: 'center', marginTop: 30 }}>
        <Text style={{ color: 'white' }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigate('Login')}><Text style={{ color: '#F1AC1C', fontWeight: '600' }}>Sing In here!</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C4E7E',
  },
  Main: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,

  },
  InputType: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    borderRadius: 5
  },
  Input: {

  },
  BTN: {
    backgroundColor: '#F1AC1C',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10
  },
  AuthIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})