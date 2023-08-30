import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home(){

    const [pontos1, setPontos1] = useState(0);
    const [pontos2, setPontos2] = useState(0);


    return(
        <View style={styles.conteiner}>
            <Text style={styles.uppertxt}>MARCADOR DE TRUCO</Text>

            <View style={styles.main}>
                <View style={styles.pontos}>
                    <Text style={styles.nos}>NÓS</Text>
                    <Text style={styles.num}>4</Text>

                    <View style={styles.mainbottom}>
                        <TouchableOpacity style={styles.greenbotton}><Text style={styles.bottomtxt}>+1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.redbotton}><Text style={styles.bottomtxt}>-1</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.pontos}>
                    <Text style={styles.eles}>ELES</Text>
                    <Text style={styles.num2}>2</Text>
                    
                    <View style={styles.mainbottom}>
                        <TouchableOpacity style={styles.greenbotton}><Text style={styles.bottomtxt}>+1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.redbotton}><Text style={styles.bottomtxt}>-1</Text></TouchableOpacity>
                    </View>
                </View>

            </View>

            <TouchableOpacity style={styles.ybottom}><Text style={styles.ybottomtxt}>Zerar</Text></TouchableOpacity>

        </View>

    )
}