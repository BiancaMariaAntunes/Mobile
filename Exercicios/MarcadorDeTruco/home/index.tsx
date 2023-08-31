import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Pontos } from "../components/pontuacao1";

export default function Home(){

    const [pontos1, setPontos1] = useState(0);
    const [pontos2, setPontos2] = useState(0);

    function addNos(){
        if (pontos1 >= 12){
            Alert.alert("Fim do jogo!")
            setPontos1(0)
        }else{setPontos1(pontos1+1)}
    }
    function addEles(){
        if (pontos2 >= 12){
            Alert.alert("Fim do jogo!")
            setPontos2(0)
        }else{setPontos2(pontos2+1)}
    }
    function subNos(){
        if (pontos1 <= 0){
            Alert.alert("Pontuação mínima!")
        } else{
            setPontos1(pontos1-1)
        }
    }
    function subEles(){
        if (pontos2 <= 0){
            Alert.alert("Pontuação mínima!")
        } else{
            setPontos2(pontos2-1)
        }
    }
    function zerar(){
        setPontos1(0);
        setPontos2(0);
    }


    return(
        <View style={styles.conteiner}>
            <Text style={styles.uppertxt}>MARCADOR DE TRUCO</Text>

            <View style={styles.main}>

                <Pontos name = {'Nós'}
                number={pontos1}
                onAdd ={ () => addNos()}
                onSub={() => subNos()}
                ></Pontos>
                
                <Pontos name = {'Eles'}
                number={pontos2}
                onAdd ={ () => addEles()}
                onSub={() => subEles()}
                ></Pontos>

            </View>

            <TouchableOpacity style={styles.ybottom} onPress={zerar}><Text style={styles.ybottomtxt}>Zerar</Text></TouchableOpacity>

        </View>

    )
}

/*                <View style={styles.pontos}>
                    <Text style={styles.nos}>NÓS</Text>
                    <Text style={styles.num}>{pontos1}</Text>

                    <View style={styles.mainbottom}>
                        <TouchableOpacity style={styles.greenbotton} onPress={addNos}><Text style={styles.bottomtxt}>+1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.redbotton} onPress={subNos}><Text style={styles.bottomtxt}>-1</Text></TouchableOpacity>
                    </View>
                </View>
                
                                <View style={styles.pontos}>
                    <Text style={styles.eles}>ELES</Text>
                    <Text style={styles.num2}>{pontos2}</Text>
                    
                    <View style={styles.mainbottom}>
                        <TouchableOpacity style={styles.greenbotton} onPress={addEles}><Text style={styles.bottomtxt}>+1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.redbotton} onPress={subEles}><Text style={styles.bottomtxt}>-1</Text></TouchableOpacity>
                    </View>
                </View>*/