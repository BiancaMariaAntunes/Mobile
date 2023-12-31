import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../header/header";
import { styles } from "./styles";
import Meio from "../meio/meio";
import { useState } from "react";


export default function Main(){

    const [certas, setCertas] = useState(0);
    const [erradas, setErradas] = useState(0);
    const [pontos, setPontos] = useState(0);
    const [primeiro, setPrimeiro] = useState(0);
    const [segundo, setSegundo] = useState(0);
    const [sinal, setSinal] = useState('');
    const [resposta, setResposta] = useState('');
    const [respostacerta, setRespostaCerta] = useState(0);
    const [valor, setValor] = useState(0);
    

    function gerarNumeroAleatorio(max: number, min: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sortearSimboloMatematico = () => {
        const simbolos = ['+', '-', '*', '/'];
        const indiceAleatorio = Math.floor(Math.random() * simbolos.length);
        setSinal(simbolos[indiceAleatorio])
    }
    function sorteia(){
        setPrimeiro(gerarNumeroAleatorio(1,100)),
        setSegundo(gerarNumeroAleatorio(1,100)),
        sortearSimboloMatematico()
    }

    function resetainput(){
        setValor(0)
        setResposta('')
        setRespostaCerta(0)
    }

    function reseta(){
      setCertas(0),
      setErradas(0),
      setPontos(0),
      setPrimeiro(0),
      setSegundo(0),
      setSinal('')
    }

    const calcularRespostaCorreta = (primeiro: number, segundo: number, sinal: string) => {
        switch (sinal) {
          case '+':
            return primeiro + segundo;
          case '-':
            return primeiro - segundo;
          case '*':
            return primeiro * segundo;
          case '/':
            return primeiro / segundo;
          default:
            return 0;
        }
      };

    function valida(){
        setRespostaCerta(calcularRespostaCorreta(primeiro, segundo, sinal))
        setValor(parseFloat(resposta))
        if (valor === respostacerta){
            Alert.alert('Você Acertou', `Deseja uma nova conta?`, 
            [
                {
                    text: 'Sim',
                    onPress: () => {sorteia(),
                        setPontos(pontos + 10),
                        setCertas(certas + 1)
                        setResposta("")}
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
            )
        }else{
            setPontos(pontos - 5),
            setErradas(erradas + 1)
        }

    }

    return(
        <View style={styles.conteiner}>
            <Header sorteia={() => sorteia()}
            numero={pontos}
            number={certas}
            number2={erradas}/>

            <Meio
            numero={primeiro}
            number={segundo}
            sinal={sinal}
            valida={() => valida()}
            onchange={setResposta}
            value={resposta}/>

            <TouchableOpacity  style={styles.button} onPress={reseta}>
                <Text style={styles.textbutton}>Novo Jogo</Text>
            </TouchableOpacity>

        </View>
    )
}