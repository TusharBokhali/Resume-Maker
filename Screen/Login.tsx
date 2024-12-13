import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.Main}>
        <Image source={require('../assets/image/RESUMEONG.png')}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
          resizeMode='contain'
        />
        <Text style={{ marginVertical: 10 }}>Email</Text>
        <View style={styles.InputType}>
          <TextInput style={styles.Input} placeholder='Enter Email' />
        </View>

        <Text style={{ marginVertical: 10 }}>Password</Text>
        <View style={styles.InputType}>
          <TextInput style={styles.Input} placeholder='Enter Password' />
        </View>
        <TouchableOpacity>
          <Text style={{ textAlign: 'right' ,marginBottom:70}}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BTN}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '600' }}>Login</Text>
        </TouchableOpacity>
      </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:50,marginTop:20}}>
          <View style={styles.AuthIcon}></View>
          <View style={styles.AuthIcon}></View>
          <View style={styles.AuthIcon}></View>
        </View>
        <View style={{flexDirection:'row',width: '99%',justifyContent:'center',marginTop:30}}> 
        <Text style={{color:'white'}}>Don't have an account? </Text>
        <TouchableOpacity><Text  style={{color:'#F1AC1C',fontWeight:'600'}}>Sing Up here!</Text></TouchableOpacity>
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
    height: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,

  },
  InputType: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
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
  AuthIcon:{
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:100
  }
})