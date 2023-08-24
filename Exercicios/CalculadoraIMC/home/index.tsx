
import { View, Text } from "react-native";
import { styles } from './styles';

export default function Home(){
    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={styles.textheader} >Calculadora de IMC </Text>
                <Text style={styles.textheader2} >Descubra qual o seu índice de Massa Corporal </Text> 
            </View>
            <View style={styles.main}>
                <Text style = {styles.textmain}>Seu índice de massa corporal é:</Text>
                <Text style = {styles.textmain2}> a </Text>
    
            </View>
            <View style={styles.footer}>
                <Text style={styles.textfooter}>Cesul</Text>
    
            </View>
        </View>

    )
}