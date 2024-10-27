import { Text, View } from "react-native";
import LandingPage from "../Pages/LandingPage/LandingPage";
import auth from '../Firebase/Firebase.init';
import Home from '../app/(tabs)/home';
import { Redirect } from "expo-router";
import Notification from '../app/(tabs)/notification';
import Transection from '../app/(tabs)/transection';
export default function Index() {

 const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
 


   
 {user ? <Redirect href={'/home'} /> : <LandingPage />}
    
    {/* <Home /> */}
    {/* <Transection /> */}
    
    </View>
  );
}
