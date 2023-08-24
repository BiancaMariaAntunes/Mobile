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
        fontSize:14,
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