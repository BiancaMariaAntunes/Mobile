import { Button, Alert } from "react-native";
import { Container, Input } from "./styles";
import { useState } from "react";
import api from "../../services/axios";
import LoadingScreen from "../LoadingScreen";

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleLogin(){

        setLoading(true)
   
        api.post('/vendedor/login', {
            email: username,
            senha: password
        }).then((response) => {
            const data = response.data
            console.log(data.email)
            setLoading(false)
            Alert.alert("Login realizado com sucesso!")
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            Alert.alert("Problema ao realizar o login")
        })
   
    }

    return(
        <Container> 

            <Input value={username} onChangeText={setUsername}></Input>

            <Input secureTextEntry value={password} onChangeText={setPassword}></Input>

            <Button onPress={handleLogin} title="login" />

            {
            loading && <LoadingScreen/>
            }

        </Container>


    )

}

export default Login;