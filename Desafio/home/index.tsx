import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/header";



export default function Home(){
    return(
        <View style={styles.main}>
            <View style={styles.conteiner}>
                <Header/>
                <View style={styles.partecima}>
                    <TextInput     
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={"#808080"}
                    />
                    <TouchableOpacity style={styles.bottom}>
                        <View style={styles.secondbutton}>
                            <Text style={styles.inbutton}>+</Text> 
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
   