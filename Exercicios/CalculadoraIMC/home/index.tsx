
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useState } from "react";

export default function Home(){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(0);
    const [resultado, setResultado] = useState('');

    function calculaIMC(){
         setImc(parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)))

         if (imc < 18.5){
            setResultado('Baixo peso')
         }else if (imc >= 18.5 && imc < 24.9){
            setResultado('Peso Normal')
         }else if (imc >= 25 && imc < 29.9){
            setResultado('Sobrepeso')
        }else if (imc >= 30 && imc < 34.9){
            setResultado('Obesidade grau 1')
        }else if (imc >= 35 && imc < 39.9){
            setResultado('Obesidade grau 2')
        }else if (imc >= 40){
            setResultado('Obesidade mórbida')
        }
    }


    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={styles.textheader} >Calculadora de IMC </Text>
                <Text style={styles.textheader2} >Descubra qual o seu índice de Massa Corporal </Text> 

                <View style={styles.geral}>
                    <View style={styles.infos}>
                        <Text style={styles.textinfos} >Peso (Kg)</Text>
                        <TextInput style={styles.input}
                        onChangeText={setPeso}></TextInput>
                    </View>
                    <View style={styles.infos}>
                        <Text style={styles.textinfos} >Altura (m)</Text>
                        <TextInput style={styles.input}
                        onChangeText={setAltura}></TextInput>
                    </View>
                </View>
                <TouchableOpacity style = {styles.bottom}
                onPress={calculaIMC}>
                    <Text style= {styles.textbottom}>CALCULAR</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.main}>
                <Text style = {styles.textmain}>Seu índice de massa corporal é:</Text>
                <Text style = {styles.textmain2}> {resultado} </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textfooter}>Cesul</Text>
            </View>
        </View>

    )
}