import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";


export function Data(){

    type RouteParams ={
        valorcarro : string
        idade: string
        nome : string
        valor : number
    }

    const route = useRoute()
    
    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', {valorcarro, nome, idade, carro, ano, valor : 20})
    }
    function handleBack(){
        navigation.goBack()
    }
    const {nome} = route.params as RouteParams
    const {idade} = route.params as RouteParams
    
    const [carro, setCarro] = useState('');
    const [ano, setAno] = useState('');
    const [valorcarro, setValorcarro] = useState('');
 
    return(
        <SafeAreaView>

             <LinearGradient colors={['#5374B6', '#B6535300']} style={styles.linear}>
                
                <Text style={styles.text1}>SIMULACAR</Text>
                
                <View style={styles.main}>

                    <Text style={styles.textinput}>Olá {nome}, agora vamos solicitar os dados do seu veículo</Text>

                    <View style={styles.viewinput}>
                        <Text style={styles.textinput}>Qual seu carro?</Text>
                        <TextInput value={carro} onChangeText={setCarro} style={styles.input}/>
                        <Text style={styles.textinput}>Qual o ano do seu carro?</Text>
                        <TextInput value={ano} onChangeText={setAno} style={styles.input} keyboardType = 'numeric'/>
                        <Text style={styles.textinput}>Qual o valor do seu carro?</Text>
                        <TextInput value={valorcarro} onChangeText={setValorcarro} style={styles.input} keyboardType = 'numeric'/>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleNext} >
                                <Text style={styles.textbutton}>Próximo</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={handleBack} >
                    <Text style={styles.text2}>Voltar</Text>
                </TouchableOpacity>


             </LinearGradient>



        </SafeAreaView>
    )





}