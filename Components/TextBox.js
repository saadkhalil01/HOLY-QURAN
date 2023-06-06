import { TextInput, View ,StyleSheet} from "react-native";
import { useState } from "react";


export function TextBox(){
   
   const[email,setEmail]= useState("Email");
   
   return(
      <View>
        <TextInput 
        onChangeText={setEmail}
        value={email}
        />
      </View>
   );
}

const styles = StyleSheet.create({
    TextInputStyle:{
        
    }
})