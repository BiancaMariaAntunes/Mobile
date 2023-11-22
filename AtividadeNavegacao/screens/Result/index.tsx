import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export function Result(){

    type RouteParams ={
        nome : string
        carro: string
        idade : string
        valor : number
        ano : string
    }

    const route = useRoute()
    
    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('login')
    }
    function handleBack(){
        navigation.goBack()
    }

    const {nome} = route.params as RouteParams
    const {carro} = route.params as RouteParams
    const {idade} = route.params as RouteParams
    const {ano} = route.params as RouteParams

    useEffect(() => {
        calculaTotal();
      }, []);
    
    const [base, setBase] = useState(1000);
    const [result, setResult] = useState(0);
    const [valorseguro, setValorseguro] = useState(0);
    const [valorseguroano, setValorseguroAno] = useState(0);

    const idadeInt = parseFloat(idade)
    const anoInt = parseFloat(ano)

    function calculaSeguroIdade(result : number){
        var valorSeg = 0
        if (idadeInt < 22){
            valorSeg = result * 0.2

        } else if(idadeInt >= 22 && idadeInt <= 28){
            valorSeg = result * 0.18
 
        } else if (idadeInt >= 29){
            valorSeg = result * -0.15

        }
        return valorSeg
    }
    function calculaSeguroAno(result : number){
        var valorSegAno = 0
        if (anoInt < 2000){
            valorSegAno = result * 0.3

        } else if (anoInt >= 2000 && anoInt <= 2009){
            valorSegAno = result * 0.15
   
        } else if (anoInt >= 2010 && anoInt <= 2015){
            valorSegAno = 0

        } else {
            valorSegAno = result * 0.1
  
        }
        return valorSegAno
    }
    function calculaTotal(){
        var valorTotal = base;

        var valorPorIdade = calculaSeguroIdade(valorTotal);
        valorTotal = valorTotal + valorPorIdade;
    
        var valorPorAno = calculaSeguroAno(valorTotal);
        valorTotal = valorTotal + valorPorAno;
    
        setValorseguro(valorPorIdade);
        setValorseguroAno(valorPorAno);
        setResult(valorTotal);
    
    }


    return(
        <SafeAreaView>

             <LinearGradient colors={['#5374B6', '#B6535300']} style={styles.linear}>
                
                <Text style={styles.text1}>SIMULACAR</Text>
                
                <View style={styles.main}>

                    <Text style={styles.textinput}>Olá {nome}, fizemos um orçamento para seu veículo {carro} </Text>

                    <View style={styles.viewinput}>
                        <View style={styles.grade}><Text style={styles.textgrade}>Base</Text><Text style={styles.textgrade}>{base}</Text></View>
                        <View style={styles.grade}><Text style={styles.textgrade}>por idade</Text><Text style={styles.textgrade}>{valorseguro}</Text></View>
                        <View style={styles.grade}><Text style={styles.textgrade}>por ano</Text><Text style={styles.textgrade}>{valorseguroano}</Text></View>
                    </View>
                    <View style={styles.grade} ><Text style={styles.textgrade}>Total</Text><Text style={styles.textgrade}>{result}</Text></View>

                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                                <Text style={styles.textbutton}>Finalizar</Text>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.text2}>Voltar</Text>
                </TouchableOpacity>


             </LinearGradient>



        </SafeAreaView>
    )





}