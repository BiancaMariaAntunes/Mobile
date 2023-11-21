import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";


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

    return(
        <SafeAreaView>

             <LinearGradient colors={['#5374B6', '#B6535300']} style={styles.linear}>
                
                <Text style={styles.text1}>SIMULACAR</Text>

                <View style={styles.main}>

                    <Text style={styles.textinput}>Olá {nome}, vamos realizar uma simulação para um seguro </Text>

                    <View style={styles.viewinput}>
                        <Text style={styles.textinput}>Qual sua idade?</Text>
                        <TextInput value={idade} onChangeText={setIdade} style={styles.input} keyboardType = 'numeric'/>
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