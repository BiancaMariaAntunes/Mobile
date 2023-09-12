import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    numero : number,
    valida: () => void,
    sinal : string,
    number : number,
    onchange: () => void,
}

export default function Meio(props : Props){
    return(
        <View style={styles.meio}>
            <Text style={styles.text}>Quanto é:</Text>

            <View style={styles.quadradinhos}>
                <View style={styles.quadrado}>
                    <Text style={styles.textquadrado}>{props.numero}</Text>
                </View>
                <View style={styles.quadrado}>
                    <Text style={styles.textquadrado}>{props.sinal}</Text>
                </View>
                <View style={styles.quadrado}>
                    <Text style={styles.textquadrado}>{props.number}</Text>
                </View>
            </View>

            <Text style={styles.text}>Informe sua resposta</Text>

            <View style={styles.botoes}>
                <TextInput style={styles.input} onChangeText={props.onchange} />

                <TouchableOpacity style={styles.button} onPress={props.valida}>
                    <Text style={styles.textbutton}>Validar</Text>
                </TouchableOpacity>
            </View>

    </View>
    )
}