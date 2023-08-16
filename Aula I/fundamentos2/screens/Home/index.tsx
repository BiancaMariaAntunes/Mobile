import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home(){

    function handleParticipantAdd(){
        console.log("estamos adicionando um participante")
    }

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

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>

        </View>

        <Participant/>

        </View>

    )

}