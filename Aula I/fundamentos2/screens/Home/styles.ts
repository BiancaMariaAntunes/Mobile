import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner : {
      flex:1, 
      padding:24, 
      backgroundColor: '#111',
    },
  
    titulo :{
      color: '#fff', 
      fontSize:24, fontWeight:'bold',
      marginTop: 48
    },
    data : {
      color: '#c7c7c7',
      fontSize:14
    },
    input : {
        height : 56,
        backgroundColor:'#1f1e25',
        color : '#fff',
        paddingLeft: 16,
        borderRadius: 5,
        fontSize: 18,
        flex : 1
    },
    button : {
        width: 56,
        height : 56,
        borderRadius: 5,
        backgroundColor : '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton : {
        fontSize : 28,
        color: '#fff'
    },
    form : {
    flexDirection: 'row',
    marginTop:24,
    gap: 10
    }
  })