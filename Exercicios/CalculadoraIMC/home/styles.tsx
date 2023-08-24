import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner : {
        flex:1, 
        backgroundColor: '#111',
      },
    header : {
      padding:20, 
      backgroundColor: '#967ADC',
      height: 370
    },
    textheader: {
        color: '#fff',
        fontSize:28, fontWeight:'bold',
        textAlign: 'center',
        marginTop: 20
    },
    textheader2:{
        color: '#fff',
        fontSize:15,
        textAlign: 'center',
    },
    geral : {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 15
    },
    infos:{
      height: 50,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop : 50,
      gap: 5
    },
    textinfos:{
      color: '#fff',
      fontSize:15,
      marginRight: 75
    },
    input : {
      height : 50,
      width: 150,
      backgroundColor:'#fff',
      color : '#967ADC',
      borderRadius: 3,
      fontSize: 25,
      padding: 10,
      textAlign: 'center',
    },
    bottom: {
      marginLeft:10,
      height : 50,
      width: 334,
      backgroundColor:'#fff',
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textbottom : {
      fontSize: 20, fontWeight: 'bold',
      color : '#967ADC',
    },
    main : {
        padding:20, 
        backgroundColor: '#fdfdff',
        height: 340,
        alignItems: 'center',
        justifyContent: 'center',
        gap : 10
      },
      textmain: {
        color: '#967ADC',
        fontSize:16,
      },
      textmain2: {
        color: '#8C4FCA',
        fontSize:34,
      },
      footer : {
        padding:15, 
        backgroundColor: '#967ADC',
        height: 70
      },
      textfooter : {
        color: '#fff',
        fontSize:28, fontWeight:'bold',
        textAlign: 'center',
      }

})