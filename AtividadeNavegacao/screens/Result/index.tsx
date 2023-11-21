import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export function Result(){

    type RouteParams ={
        nome : string
        carro: string
        result : number
        valorseguroano : number
        valorseguro : number
        base : number
        valor : number
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
    const {valorseguroano} = route.params as RouteParams
    const {valorseguro} = route.params as RouteParams
    const {result} = route.params as RouteParams
    const {base} = route.params as RouteParams
    const {carro} = route.params as RouteParams


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