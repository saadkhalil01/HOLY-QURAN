import { View,StyleSheet,Text } from "react-native";
import { TextBox } from "../Components/TextBox";

export function LoginScreen(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.loginBox}>
                <TextBox/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
   mainContainer:{
     flex:1,
     flexDirection:'column-reverse',
     backgroundColor: 'green',
     alignItems:'center',
     paddingBottom:120
   },
   loginBox:{
     backgroundColor:'#8cc269',
     height:280,
     width:300,
     borderRadius:8,
     elevation:9
   }
});