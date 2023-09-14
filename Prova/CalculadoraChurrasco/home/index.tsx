import { Text, TouchableOpacity, View } from "react-native";
import Header from "../components/header/header";
import { styles } from "./styles";
import Main from "../components/main/main";
import { useState } from "react";

export default function Home(){

    const [homem, setHomem] = useState(0)
    const [mulher, setMulher] = useState(0)
    const [crianca, setCrianca] = useState(0)
    const [participantes, setParticipantes] = useState(0)
    const [carne, setCarne] = useState(0)
    const [aperitivo, setAperitivo] = useState(0)
    const [totalcomida, setTotalComida] = useState(0)
    const [cerveja, setCerveja] = useState(0)
    const [agua, setAgua] = useState(0)
    const [refrigerante, setRefrigerante] = useState(0)
    const [totalbebida, setTotalBebida] = useState(0)
    const [extra1, setExtra1] = useState(0)
    const [extra2, setExtra2] = useState(0)
    const [extra3, setExtra3] = useState(0)
    const [extra4, setExtra4] = useState(0)
    const [extra5, setExtra5] = useState(0)

    
    function calcComida(){
        const carnetotal = (homem * 400) + (mulher * 300) + (crianca * 200)
        setCarne(carnetotal)

        const extracarne = carnetotal * (10/100)
        setExtra1(extracarne)

        const aptotal = (homem * 150) + (mulher * 100) + (crianca * 50)
        setAperitivo(aptotal)

        const extrap = aptotal * (10/100)
        setExtra2(extrap)

        const total = carnetotal +  extracarne + aptotal + extrap
        setTotalComida(total)
    }

    function calcBebida(){
        const cervejatotal = (homem * 4) + (mulher * 2)
        setCerveja(cervejatotal)

        const extracerveja = cervejatotal * 0.1
        setExtra3(extracerveja)

        const aguatotal = (mulher * 2) + (crianca * 2)
        setAgua(aguatotal)

        const extraagua = aguatotal * 0.1
        setExtra4(extraagua)

        const refritotal = (mulher * 1.5) + (crianca * 1.5)
        setRefrigerante(refritotal)
        
        const extrarefri = refritotal * 0.1
        setExtra5(extrarefri)

        const total = (cervejatotal + aguatotal + refritotal + extra3 + extraagua + extrarefri)
        setTotalBebida(total)
    }

    function calcPessoas(){
        const qtd = Number(homem) + Number(mulher) + Number(crianca)
        setParticipantes(qtd)
    }


    function Calcular(){
        calcComida()
        calcBebida()
        calcPessoas()
    }

    function limpar(){
        setHomem(0)
        setMulher(0)
        setCrianca(0)
        setParticipantes(0)
        setCarne(0)
        setAperitivo(0)
        setTotalComida(0)
        setCerveja(0)
        setAgua(0)
        setRefrigerante(0)
        setTotalBebida(0)
        setExtra1(0)
        setExtra2(0)
        setExtra3(0)
        setExtra4(0)
        setExtra5(0)
    }

    return(
        <View style={styles.conteiner}>
            <Header
            onchange1={setHomem}
            onchange2={setCrianca}
            onchange3={setMulher}
            onpress={Calcular}
            participantes={participantes}
            valueHomenProps={homem.toString()}
            valueMulherProps={mulher.toString()}
            valueCriancaProps={crianca.toString()}/>
            
            <Main
            carne={carne}
            aperitivo={aperitivo}
            totalcomida={totalcomida}
            cerveja={cerveja}
            agua={agua}
            refrigerante={refrigerante}
            totalbebida={totalbebida}
            extra1={extra1}
            extra2={extra2}
            extra3={extra3}
            extra4={extra4}
            extra5={extra5}/>

            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={limpar}>
                    <Text style={styles.textbutton}>Zerar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}