import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner : {
      flex:1, 
      padding:16, 
      backgroundColor: '#111',
    },
  
    titulo :{
      color: '#fff', 
      fontSize:24, fontWeight:'bold',
      marginTop: 28
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
        fontSize: 16,
        flex : 1
    },
    button : {
        height : 56,
        borderRadius: 5,
        backgroundColor : '#31cf67',
        paddingLeft: 16,
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton : {
        fontSize : 24,
        color: '#fff'
    },
    form : {
    height: 120,
    flexDirection: 'column',
    marginTop:24,
    gap: 10
    },
    listEmpty :{
        color: '#fff',
        fontSize:14,
        textAlign: 'center',
        marginTop: 18

    },
    titulo2 :{
        color: '#fff', 
        fontSize:20, fontWeight:'bold',
        marginTop: 18
      },
  })