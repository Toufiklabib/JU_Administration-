import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
const LandingPage = () => {

    const router = useRouter();
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])

  return (
    <View>
    <Image
      source={require('../../assets/images/Ai4.jpg')} 
      style={{
        width: "100%",
        height: 550,
      }}
    />
 
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
          padding: 20,
        }}
      >
        JU Administration
      </Text>
      <Text 
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontFamily: 'outfit-regular',
          color: Colors.BLACK,
          padding: 10,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi sunt consequatur necessitatibus iusto mollitia natus eligendi aliquid numquam maxime?
      </Text>

      <TouchableOpacity style={styles.button}  onPress={()=>router.push('auth/SignIn')}  >
        <Text style={styles.btnformate}>
         Get Started
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default LandingPage;

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
      button: {
        padding: 15,
        backgroundColor: Colors.BLACK,
        borderRadius: 99,
        alignItems: 'center',  
        justifyContent: 'center',  
        marginTop:'15%',
        margin:15,
      },
      btnformate: {
        color: Colors.WHITE,  
        fontSize: 17,
        fontFamily:'outfit-medium'
      },
})