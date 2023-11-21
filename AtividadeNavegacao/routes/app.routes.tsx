import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"
import { Data } from "../screens/Data"
import { Result } from "../screens/Result"

export function AppRoutes(){

    const { Navigator, Screen} = createNativeStackNavigator()

    return(
        <Navigator screenOptions={{headerShown:false}}>

            <Screen name="login" component={Login}/>
            <Screen name="register" component={Register}/>
            <Screen name="data" component={Data}/>
            <Screen name="result" component={Result}/>

        </Navigator>
    )

}