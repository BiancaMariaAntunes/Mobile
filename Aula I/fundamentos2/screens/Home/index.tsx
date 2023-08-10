import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home(){

    return(

        <View style={styles.conteiner}>
        <Text style={styles.titulo}>Nome do grupo</Text>
        <Text style={styles.data}>Quarta, 09 de agosto</Text>

        <View style={styles.form}>

            <TextInput
                style={styles.input}
                placeholder='Informe um participante'
                placeholderTextColor={'#fff'}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>

        </View>

        </View>

    )

}