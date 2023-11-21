import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function Login(){

    const navigation = useNavigation()

    const [nome, setNome] = useState('');

    function handleNext(){
        navigation.navigate('register', {nome, valor : 20})
    }

    return(

        <SafeAreaView >
            <LinearGradient colors={['#5374B6', '#B6535300']} style={styles.linear}>

                <View style={styles.main}>
                    
                    <Text style={styles.text1}>SIMULACAR</Text>

                    <View style={styles.div}>
                        <View  style={styles.viewinput}>
                            <Text style={styles.textinput}>Usuário</Text>
                            <TextInput value={nome} onChangeText={setNome} style={styles.input}/>
                            <Text style={styles.textinput} >Senha</Text>
                            <TextInput style={styles.input} secureTextEntry={true}/>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.textbutton}>Logar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.text2}>Esqueci minha senha</Text>

            </LinearGradient>

        </SafeAreaView>

    )

}