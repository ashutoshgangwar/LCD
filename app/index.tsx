import { Text, View } from "react-native";

// import Index from "../Component/Index";
// import Vehicle from "../Component/Vehicle"
// import Entryvehicle from "../Component/Entryvehicle"
import Exitvehicle from "../Component/Exitvehicle"




export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
      {/* <Index/> */}
      {/* <Vehicle/> */}
      {/* <Entryvehicle/> */}
      <Exitvehicle/>
   
    </View>
    
  );
}