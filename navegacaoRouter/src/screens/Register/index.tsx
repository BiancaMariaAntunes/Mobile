import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export function Register(){

    const [nome, setNome] = useState('');

    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', {nome, valor : 20})
    }
    function handleBack(){
        navigation.goBack()
    }

    return(
        <SafeAreaView>
            <Text>Cesul</Text>

            <View>
                <Text>Informe seu nome</Text>
                <TextInput value={nome} onChangeText={setNome}/>
            </View>

            <View>
                <Text>Informe seu sobrenome</Text>
                <TextInput />
            </View>

            <View>
                <Button onPress={handleBack} title="Voltar" color={'#860929'}/>
                <Button onPress={handleNext} title="Proximo" color={'#01633D'}/>

            </View>
        </SafeAreaView>



    )

}