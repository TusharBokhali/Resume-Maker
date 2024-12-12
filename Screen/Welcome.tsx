// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function Welcome() {
  const {navigate} = useNavigation();
  return (
    <Animated.View style={styles.container} entering={FadeInLeft.delay(200).duration(400)}>
        <View style={styles.FirstWhite}>
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} 
      />
        <Animated.Text style={{fontSize:35,color:'black',fontWeight:'600'}} entering={FadeInUp.delay(300).duration(600)}>Welcome</Animated.Text>
      <Animated.Image source={require('../assets/image/WelcomeFirst.png')} 
      style={{
        width:250,
        height:250,
        resizeMode:'contain'
      }}
      entering={FadeInLeft.delay(300).duration(600)}
      />
      <View>
      <Animated.Text style={{fontSize:22,fontWeight:'600',letterSpacing:0.8,textAlign:'center',marginVertical:10}} entering={FadeInUp.delay(400).duration(700)}>Resume Maker</Animated.Text>
      <Animated.Text style={{letterSpacing:0.6,textAlign:'center',fontSize:16,fontWeight:'500',lineHeight:30}} entering={FadeInUp.delay(400).duration(700)}>Craft your perfect resume effortlessly with Me Resume Maker!</Animated.Text>
      </View>
        </View>
        <Animated.View entering={FadeInDown.delay(400).duration(700)}>
        <TouchableOpacity style={styles.BTN} onPress={()=>navigate('Login')}>
          <Text style={{textAlign:'center',color:'white',fontSize:18,fontWeight:'600'}}>Get Started</Text>
        </TouchableOpacity>
        </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5C4E7E'
      },
      FirstWhite:{
        width:'100%',
        height:'80%',
        padding:10,
        backgroundColor:'white',
        borderBottomLeftRadius:70,
        borderBottomRightRadius:70,
        paddingTop:50,
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:50
    },
    BTN:{
      backgroundColor:'#F1AC1C',
      marginHorizontal:20,
      paddingVertical:15,
      borderRadius:10
    }
});