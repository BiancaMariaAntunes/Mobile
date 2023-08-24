import {Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participant';
import { useState } from 'react';

export default function Home(){
    const [participants, setParticipants] = useState<String[]>([]);
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd(){
        
        if(participantName.trim().length > 0){

            if (participants.includes(participantName)){
                setParticipantName('')
                return Alert.alert("Problema", "-> Participante já existe")
               
            }

            setParticipants([...participants, participantName.trimStart()])
            setParticipantName('')
        }else {
            Alert.alert("Problema ao adicionar participante", "-> Nome esta vazio")
        }

    }

    function handleParticipantRemove(name: String){
        Alert.alert('Remover', `Deseja remover  o participante ${name}`, 
        [
            {
                text: 'Sim',
                // prevStates é o estado atual da lista, ou seja, pega os dados da lista 
                //filter serve para retornar somente nomes diferentes ao que voce quer remover
                onPress: () => setParticipants(prevState => prevState.filter( partic => partic != name))
                // igual a setParticipants(participants.filter( partic => partic != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]
        )
    }

    return(
    <View style={styles.conteiner}>
        <Text style={styles.titulo}>Nome do grupo</Text>
        <Text style={styles.data}> Quarta, 9 de Agosto </Text>
        
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Informe um grupo'
                placeholderTextColor={"#ffff"}
                onChangeText={setParticipantName}
                value= {participantName}

            />

            <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleParticipantAdd}>
                <Text style={styles.textButton}> + </Text>

            </TouchableOpacity>
        </View>

        <Text style={styles.titulo}>Participantes</Text>

        {/*<ScrollView>
        {
            participants.map(participant => (
                <Participant key={participant} name={participant} onRemove={handleParticipantRemove}/> 
            ))
        }
        </ScrollView>
    */}
       

       <FlatList
       data={participants}
       keyExtractor={item => item}
       renderItem={({item}) => (
        <Participant key={item}
                     name={item}
                     onRemove={() => handleParticipantRemove(item)}/>

       )}
       ListEmptyComponent={() =>
        <Text style={styles.listEmpty}>Sem Participantes</Text>
    
    }
       />


        
        
  </View>

    )
}