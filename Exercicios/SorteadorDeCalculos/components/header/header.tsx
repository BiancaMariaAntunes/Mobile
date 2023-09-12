import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    numero : number,
    sorteia: () => void,
    number : number,
    number2 : number,
}

export default function Header( props : Props ){

    return( 
        <View style={styles.inicio}>
            <Text style={styles.texto}>Você tem {props.numero} pontos</Text>
            <View style={styles.pontos}>
                <View style={styles.gap}>
                    <Text style={styles.texto2}>Certas</Text>
                    <Text style={styles.texto4}>{props.number}</Text>
                </View>

                <View style={styles.gap}>
                    <Text style={styles.texto3}>Erradas</Text>
                    <Text style={styles.texto4}>{props.number2}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={props.sorteia}>
                <Text style={styles.textbutton}>Sortear Desafio</Text>
                </TouchableOpacity>
            
        </View>
    )
}