import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import img from "./imagem/foguete.png";

export default function Header(){
    return(
    <View style={styles.cima}>
        <View>
            <Image source={img}/>
        </View>
        <View style={styles.escrita}>                    
            <Text style={styles.to}>to</Text>
            <Text style={styles.do}>do</Text>
        </View>
    </View>
    )
}