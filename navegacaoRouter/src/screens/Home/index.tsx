import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, View, Image } from "react-native";

export function Home(){

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('register')
    }

    return(

        <SafeAreaView>

            <Image source={require('../../assets/logo.png')}/>

            <Button title="Proximo" color={'#01633D'}
                onPress={handleNext}/>

        </SafeAreaView>

    )

}