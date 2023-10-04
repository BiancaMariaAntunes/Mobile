import { Button, Text, TextInput, View } from "react-native";

export function Register(){

    return(
        <View>
            <Text>Cesul</Text>

            <View>
                <Text>Informe seu nome</Text>
                <TextInput />
            </View>

            <View>
                <Text>Informe seu sobrenome</Text>
                <TextInput />
            </View>

            <View>
                <Button title="Voltar" color={'#860929'}/>
                <Button title="Proximo" color={'#01633D'}/>
            </View>

        </View>

    )

}