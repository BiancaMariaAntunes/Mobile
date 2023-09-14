import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props ={
    onchange1 : any,
    onchange2: any,
    onchange3 : any,
    onpress : () => void,
    participantes : number
    valueHomenProps: string
    valueMulherProps: string
    valueCriancaProps: string
}


export default function Header(props : Props){
    return(
        <View>

            <View style={styles.header} >
                <Text style={styles.text}>ChurraSul</Text>
            </View>

            <View style={styles.row}>

                <View style={styles.components}>

                    <Text style={styles.text2}>Homens</Text>
                    <TextInput style={styles.input} onChangeText={props.onchange1} value={props.valueHomenProps}/>

                    <Text style={styles.text2}>Crianças</Text>
                    <TextInput style={styles.input} onChangeText={props.onchange2} value={props.valueCriancaProps}/>

                </View>

                <View style={styles.components}>

                    <Text style={styles.text2}>Mulheres</Text>
                    <TextInput style={styles.input} onChangeText={props.onchange3} value={props.valueMulherProps}/>

                    <TouchableOpacity style={styles.button} onPress={props.onpress}>
                        <Text style={styles.text3} >Calcular</Text>
                    </TouchableOpacity>

                </View>

            </View> 

            <View style={styles.meio}>
                <Text style={styles.text}>Resultado</Text>
                <View style={styles.quadradomeio}>
                    <Text style={styles.textmeio}>Realizamos o calculo para {props.participantes} participantes</Text>
                </View>
            </View>

        </View>
    )
}