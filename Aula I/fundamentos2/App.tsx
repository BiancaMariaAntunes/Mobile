import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, padding:24, backgroundColor: '#111'}}>
      <Text style={{color: '#fff', fontSize:24, fontWeight:'bold', marginTop: 48}}>Nome do grupo</Text>
      <Text style={styles.texto}>Quarta, 09 de agosto de 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto : {
    color: '#c7c7c7',
    fontSize:16
  }
})