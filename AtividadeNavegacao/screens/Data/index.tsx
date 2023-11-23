import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";

export function Data() {
  type RouteParams = {
    valorcarro: string;
    idade: string;
    nome: string;
    valor: number;
  };

  const route = useRoute();

  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate("result", {
      valorcarro,
      nome,
      idade,
      carro,
      ano,
      valor: 20,
    });
  }
  function handleBack() {
    navigation.goBack();
  }
  const { nome } = route.params as RouteParams;
  const { idade } = route.params as RouteParams;

  const [carro, setCarro] = useState("");
  const [ano, setAno] = useState("");
  const [valorcarro, setValorcarro] = useState("");
  const [placa, setPlaca] = useState("");

  return (
    <SafeAreaView>
      <LinearGradient colors={["#5374B6", "#B65353"]} style={styles.linear}>
        <Text style={styles.text1}>SIMULACAR</Text>

        <View style={styles.main}>
          <KeyboardAvoidingView behavior={"position"}>
            <Text style={styles.textinput}>
              Olá {nome}, agora vamos solicitar os dados do seu veículo
            </Text>

            <View style={styles.viewinput}>
              <Text style={styles.textinput}>Qual seu carro?</Text>
              <TextInput
                value={carro}
                onChangeText={setCarro}
                style={styles.input}
              />
              <Text style={styles.textinput}>Qual o ano do seu carro?</Text>
              <TextInput
                value={ano}
                onChangeText={setAno}
                style={styles.input}
                keyboardType="numeric"
              />
              <Text style={styles.textinput}>Qual o valor do seu carro?</Text>
              <TextInput
                value={valorcarro}
                onChangeText={setValorcarro}
                style={styles.input}
                keyboardType="numeric"
              />
              <Text style={styles.textinput}>Qual a placa do seu carro?</Text>
              <TextInputMask
                type={"custom"}
                value={placa}
                onChangeText={setPlaca}
                style={styles.input}
                options={{
                  mask: "AAA9A99",
                }}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.textbutton}>Próximo</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.text2}>Voltar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}
