/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, useWindowDimensions, Alert } from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {navigate} = useNavigation();
  const [borders,setborders] = useState(false)
  const [email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const {width} = useWindowDimensions();
  
const Logins = () =>{
  try {
    axios.post('https://interviewhub-3ro7.onrender.com/admin/login',{
       "email" : email,
    "password" : Password
    }).then(async(res)=>{
      if(res.data){
        await AsyncStorage.setItem("user",JSON.stringify(res.data.data));
        Alert.alert('Successfully Login');
        setEmail('');
        setPassword('');
        navigate('Home');
      }
    })
  } catch (error) {
    console.log(error);
    
  }
};
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
        />
      <Animated.View style={[styles.Main,{width:width-'20%'}]} entering={FadeInUp.delay(400).duration(700)}>
        <Animated.Image entering={FadeInUp.delay(300).duration(600)} source={require('../assets/image/3dCaroon.png')}
          style={{ width: 250, height: 250, alignSelf: 'center' }}
          resizeMode='contain'
          />
        <Animated.Text entering={FadeInLeft.delay(300).duration(600)}  style={{ marginVertical: 10 }}>Email</Animated.Text>
        <Animated.View entering={FadeInLeft.delay(300).duration(600)} style={[styles.InputType]} >
          <TextInput style={[styles.Input]} placeholder='Enter Email' textContentType='emailAddress' autoCapitalize='none' onPress={()=>setborders(true)} onChangeText={setEmail} value={email}/>
        </Animated.View>

        <Animated.Text  entering={FadeInLeft.delay(300).duration(600)} style={{ marginVertical: 5 }}>Password</Animated.Text>
        <Animated.View entering={FadeInLeft.delay(300).duration(600)} style={styles.InputType}>
          <TextInput style={styles.Input} placeholder='Enter Password'  onPress={()=>setborders(true)} onChangeText={setPassword} value={Password}/>
        </Animated.View>
        <TouchableOpacity>
          <Text style={{ textAlign: 'right' ,marginBottom:40}}>Forgot Password?</Text>
        </TouchableOpacity>
        <Animated.View entering={FadeIn.delay(400).duration(700)}>
        <TouchableOpacity style={styles.BTN} onPress={()=>Logins()}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '600' }}>Login</Text>
        </TouchableOpacity>
        </Animated.View>
      </Animated.View>
        <Animated.View entering={FadeInDown.delay(400).duration(700)} style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:50,marginTop:20}}>
          <TouchableOpacity style={styles.AuthIcon}>
            <Image source={require('../assets/image/Facebook.png')}
            style={{width:'100%',height:'100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.AuthIcon}>
            <Image source={require('../assets/image/Google.png')}
            style={{width:'100%',height:'100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.AuthIcon}>
            <Image source={require('../assets/image/Twitter.png')}
            style={{width:'100%',height:'100%'}}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View  entering={FadeInDown.delay(400).duration(700)} style={{flexDirection:'row',width: '99%',justifyContent:'center',marginTop:30}}> 
        <Text style={{color:'white'}}>Don't have an account? </Text>
        <TouchableOpacity onPress={()=>navigate('SingIn')}><Text  style={{color:'#F1AC1C',fontWeight:'600'}}>Sing Up here!</Text></TouchableOpacity>
        </Animated.View>
            {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C4E7E',
  },
  Main: {
    // height: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,

  },
  Input:{
    paddingHorizontal:5
  },
  InputType: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    borderRadius: 5
  },
  BTN: {
    backgroundColor: '#F1AC1C',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom:20
  },
  AuthIcon:{
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  }
})