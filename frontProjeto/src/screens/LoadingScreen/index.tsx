import { View, ActivityIndicator, Text } from "react-native";
import { ContainerLoading } from "./styles";

function LoadingScreen(){

    return(
        <ContainerLoading>
            <ActivityIndicator size="large" color="blue"/>
            <Text>Carregando...</Text>
        </ContainerLoading>
    )
}

export default LoadingScreen