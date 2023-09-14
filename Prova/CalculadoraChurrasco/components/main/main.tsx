import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    carne : number
    aperitivo : number
    totalcomida : number
    extra1 : number
    extra2 : number 
    extra3 : number
    extra4 : number
    extra5 : number
    cerveja : number
    refrigerante : number
    agua : number
    totalbebida : number

}


export default function Main(props : Props){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>Comida</Text>
            <View style={styles.row}>
                <View style={styles.quadrado}>
                    <Text style={styles.gtext}>{props.carne} g</Text>
                    <Text style={styles.gtext2}>Carne</Text>
                    <Text style={styles.gtext3}>{props.extra1} g extra</Text>
                </View>
                <View style={styles.quadrado}>
                    <Text style={styles.gtext}>{props.aperitivo} g</Text>
                    <Text style={styles.gtext2}>Aperitivo</Text>
                    <Text style={styles.gtext3}>{props.extra2} g extra</Text>
                </View>
                <View style={styles.quadrado2}>
                    <Text style={styles.wtext}>{props.totalcomida} g</Text>
                    <Text style={styles.wtext2}>Total</Text>
                </View>
            </View>
            <Text style={styles.text}>Bebida</Text>
            <View style={styles.row}>

                <View style={styles.quadrado3}>
                    <Text style={styles.ptext}>{props.cerveja} L</Text>
                    <Text style={styles.ptext2}>Cerveja</Text>
                    <Text style={styles.ptext3}>{props.extra3} ml extra</Text>
                </View>

                <View style={styles.quadrado3}>
                    <Text style={styles.ptext}>{props.agua} L</Text>
                    <Text style={styles.ptext2}>Agua</Text>
                    <Text style={styles.ptext3}>{props.extra4} ml extra</Text>
                </View>

                <View style={styles.quadrado3}>
                    <Text style={styles.ptext}>{props.refrigerante} L</Text>
                    <Text style={styles.ptext2}>Refrigerante</Text>
                    <Text style={styles.ptext3}>{props.extra5} ml extra</Text>
                </View>

            </View>

            <View style={styles.retangulo}>
                    <Text style={styles.rtext}>{props.totalbebida} LITROS </Text>
                    <Text style={styles.rtext2}>TOTAL</Text>
            </View>
        </View>
    )
}