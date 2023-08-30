import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner : {
      flex:1, 
      padding:10, 
      backgroundColor: '#383535',   
      alignItems: 'center',
      

    },
    uppertxt : {
        fontSize: 34,
        color : '#FFFFFF', fontWeight:'bold',
        marginTop: 50
    },
    main : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap : 10
    },
    pontos: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    } ,
    nos : {
        fontSize: 30,
        color:'#4AA5F9', fontWeight : 'bold'
    },
    num : {
        fontSize: 150,
        color:'#4AA5F9', fontWeight : 'bold',
        marginTop:-30,
    },
    eles : {
        fontSize: 30,
        color:'#C08DF3', fontWeight : 'bold',
        
    },
    num2 : {
        fontSize: 150,
        color:'#C08DF3', fontWeight : 'bold',
        marginTop:-30,
    },
    greenbotton : {
        backgroundColor: '#589D52',
        width: 120,
        height: 60,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    redbotton : {
        backgroundColor: '#BD1010',
        width: 120,
        height: 60,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainbottom: {
        marginTop:70,
        gap : 15
    },
    bottomtxt: {
        fontSize: 35,
        color : '#FFFFFF', fontWeight:'bold',

    },
    ybottomtxt: {
        fontSize: 25,
        color : '#FFFFFF', fontWeight:'bold',
    },
    ybottom : {
        backgroundColor: '#DE9609',
        width: 350,
        height: 60,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
})