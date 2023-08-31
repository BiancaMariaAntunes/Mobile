import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props ={
    name: String, 
    number : number,
    onAdd: () => void,
    onSub: () => void,


}


export function Pontos(props : Props){


    return (
        <View style={styles.pontos}>
        <Text style={[props.name == 'Eles' ? styles.eles: styles.nos]}>{props.name}</Text>
        <Text style={[props.name == 'Eles' ? styles.numberEles: styles.numberNos]}>{props.number}</Text>

        <View style={styles.mainbottom}>
            <TouchableOpacity style={styles.greenbotton} onPress={props.onAdd}><Text style={styles.bottomtxt}>+1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.redbotton} onPress={props.onSub}><Text style={styles.bottomtxt}>-1</Text></TouchableOpacity>
        </View>
    </View>
    )
}