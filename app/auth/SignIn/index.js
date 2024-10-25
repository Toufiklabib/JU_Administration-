import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import auth from '../../../Firebase/Firebase.init';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  
   
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(null);
    const navigation = useNavigation();
    const router = useRouter();
    
  useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])


    const handelLogin = () =>{
     setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.replace('/home');
        console.log(user);
        setLoading(false);
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
      });

    }

  return (
    <ScrollView style={{padding:30,
        backgroundColor: Colors.WHITE,
        height:'100%',
        paddingTop:80,
      }} >
          <View >
            <Text
            style={{
              fontFamily:'outfit-bold',
              fontSize:30,
      
            }}
            >Let's Sign You In </Text>
            <Text
            style={{
              fontFamily:'outfit-regular',
              fontSize:30,
            }}
            >Welcome back  </Text>
            <Text
            style={{
              fontFamily:'outfit-bold',
              fontSize:30,
              marginTop:10,
            }}
            >You've been Missed  </Text>
      
           <View style={{
            marginTop:50,
            
           }} >
            <Text style={{
              fontFamily:'outfit-medium',
              marginVertical:2,
            }} >Email</Text>
            <TextInput
             style={styles.input} 
              placeholder='Enter Your Name'  
              onChangeText={(text)=>setEmail(text)}
              />
           </View>
           {/* password */}
           <View style={{
            marginTop:20,
            
           }} >
            <Text style={{
             fontFamily:'outfit-medium',
              marginVertical:2,
            }} >Password</Text>
            <TextInput 
            secureTextEntry={true}
             style={styles.input} 
             placeholder='Enter Your Password' 
             onChangeText={(text)=>setPassword(text)}
             />
           </View>
      
           <TouchableOpacity 
            onPress={handelLogin}
           style={{
            padding:18,
            backgroundColor:Colors.BLACK,
            borderRadius:10,
              marginTop:40,
           }}  >
            {
              loading ? <>
                  <ActivityIndicator size="small" color={Colors.WHITE} style={styles.loading} />
              </> : <>
              <Text style={{
              color:Colors.WHITE,
              fontFamily:'outfit-medium',
              textAlign:'center',
            }} >Sign In </Text>
              </>
            }
           </TouchableOpacity>
      
      
           <TouchableOpacity 
           onPress={()=>router.replace('auth/Forgot')} 
           style={{
            padding:18,
            borderColor:Colors.BLACK,
            borderRadius:10,
              marginTop:20,
              borderRadius:10,
          borderWidth:2,
          paddingLeft:10,
           }}  >
            <Text style={{
              color:Colors.BLACK,
              fontFamily:'outfit-medium',
              textAlign:'center',
            }} > Forgot Password</Text>
           </TouchableOpacity >
    
           <TouchableOpacity  onPress={()=>router.replace('auth/Signup')} 
            style={{
            padding:18,
            borderColor:Colors.BLACK,
            borderRadius:10,
              marginTop:20,
              borderRadius:10,
          borderWidth:2,
          paddingLeft:10,
           }}  >
            <Text style={{
              color:Colors.BLACK,
              fontFamily:'outfit-medium',
              textAlign:'center',
            }} >Create new account </Text>
           </TouchableOpacity >
      
          </View>
       </ScrollView>
  )
};

export default SignIn;

const styles = StyleSheet.create({

    input:{
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        padding:15,
        borderColor:Colors.GRAY,
      }
})