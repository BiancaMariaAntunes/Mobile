import { FlatList, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { getContacts } from "../../db/Database";

export function ListContacts(){

    const [contacts, setContacts] = useState<{_id: number, name: string, phone: string}[]>([])

   const refreshList = async () => {
    const data = await getContacts()
    setContacts(data);
   }

   useEffect(() => {
    refreshList()
   }, [])

    return(
        <View>
            <Text> Lista de Contatos</Text>

            <FlatList 
                data={contacts}
                keyExtractor={(contact) => contact._id.toString()}
                renderItem={({item}) => (
                    <View>
                            <Text>{item.name}</Text>
                            <Text>{item.phone}</Text>
                    </View>
                )}

            />

        </View>
    )

}
