import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";


export function Data(){

    type RouteParams ={
        idade: string
        nome : string
        valor : number
    }

    const route = useRoute()
    
    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', {valorseguro, valorseguroano, result, base, nome, idade, carro, ano, valor : 20})
        calculaSeguro()
    }
    function handleBack(){
        navigation.goBack()
    }

    const {idade} = route.params as RouteParams
    const {nome} = route.params as RouteParams

    const [carro, setCarro] = useState('');
    const [ano, setAno] = useState('');


    
    const [base, setBase] = useState(1000);
    const [result, setResult] = useState(0);
    const [valorseguro, setValorseguro] = useState(0);
    const [valorseguroano, setValorseguroAno] = useState(0);

    const idadeInt = parseFloat(idade)
    const anoInt = parseFloat(ano)

    function calculaSeguroIdade(){
        if (idadeInt < 22){
            const valorSeg = base * 0.2
            setValorseguro(valorSeg)
        } else if(idadeInt >= 22 && idadeInt <= 28){
            const valorSeg = base * 0.18
            setValorseguro(valorSeg)
            const valorBase = base + valorSeg
            setBase(valorBase)
        } else if (idadeInt >= 29){
            const valorSeg = base * 0.15
            setValorseguro(valorSeg)
            const valorBase = base - valorSeg
            setBase(valorBase)
        }
    }
    function calculaSeguroAno(){
        if (anoInt < 2000){
            const valorSegAno = base * 0.3
            setValorseguroAno(valorSegAno)
        } else if (anoInt >= 2000 && anoInt <= 2009){
            const valorSegAno = base * 0.15
            setValorseguroAno(valorSegAno)
        } else if (anoInt >= 2010 && anoInt <= 2015){
            const valorSegAno = 0
            setValorseguroAno(valorSegAno)
        } else {
            const valorSegAno = base * 0.1
            setValorseguroAno(valorSegAno)
        }
    }
    function calculaTotal(){
            if (anoInt >= 2016){
                const resultado = base - valorseguroano
                setResult(resultado)
            } else {
                const resultado = base + valorseguroano
                setResult(resultado)
        }
    }

    function calculaSeguro(){
        calculaSeguroIdade()
        calculaSeguroAno()
        calculaTotal()
    }

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
                    </View>

                    <TouchableOpacity style={styles.button} onPress={calculaSeguro} >
                                <Text style={styles.textbutton}>Próximo {result}</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={handleBack} >
                    <Text style={styles.text2}>Voltar</Text>
                </TouchableOpacity>


             </LinearGradient>



        </SafeAreaView>
    )





}