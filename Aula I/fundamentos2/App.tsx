import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, padding:24, backgroundColor: '#111'}}>
      <Text style={{color: '#fff', fontSize:24, fontWeight:'bold'}}>Nome do grupo</Text>
      <Text >Quarta, 09 de agosto</Text>
    </View>
  );
}

