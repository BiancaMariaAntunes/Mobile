import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";


export function Register(){

    type RouteParams ={
        nome : string
        valor : number
    }

    const route = useRoute()
    
    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('data', {nome, idade, valor : 20})
    }
    function handleBack(){
        navigation.goBack()
    }

    const {nome} = route.params as RouteParams

    const [idade, setIdade] = useState('');
    const [cpf, setCPF] = useState('');

    return(
        <SafeAreaView>

             <LinearGradient colors={['#5374B6', '#B65353']} style={styles.linear}>
                
                <Text style={styles.text1}>SIMULACAR</Text>

                <View style={styles.main}>

                    <Text style={styles.textinput}>Olá {nome}, vamos realizar uma simulação para um seguro </Text>

                    <View style={styles.viewinput}>
                        <Text style={styles.textinput}>Qual sua idade?</Text>
                        <TextInput value={idade} onChangeText={setIdade} style={styles.input} keyboardType = 'numeric'/>
                        <Text style={styles.textinput}>Qual seu CPF?</Text>
                        <TextInputMask
                            type={'cpf'}
                            value={cpf}
                            onChangeText={setCPF}
                            style={styles.input}
                            keyboardType = 'numeric'
                            />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                                <Text style={styles.textbutton}>Próximo</Text>
                    </TouchableOpacity>

                  
                </View>

                <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.text2}>Voltar</Text>
                </TouchableOpacity>

             </LinearGradient>



        </SafeAreaView>
    )





}