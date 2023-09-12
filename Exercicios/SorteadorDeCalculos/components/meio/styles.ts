import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    meio : {
        width: '100%', 
        height: 500,
        padding : 30,
        flexDirection: 'column',
        gap: 30,
        marginTop: 10
    },
    text:{
        fontSize: 20,
        color : '#FFFFFF', fontWeight:'bold',
    },
    quadradinhos : {
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quadrado : {
        width : 90,
        height : 65,
        backgroundColor: '#4AA5F9',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textquadrado : {
        fontSize: 25,
        color : 'white', fontWeight:'bold',
        textAlign: 'center',
    },
    botoes : {
        alignItems: 'center',
        justifyContent: 'center', 
        gap : 35,
        marginTop: -15
    },
    input : {
        width : 180,
        height : 65,
        backgroundColor: '#F6F6F6',
        color : '#8C4FCA',
        borderRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25, fontWeight:'bold',
    },
    button : {
        width : 340,
        height : 65,
        borderRadius: 15,
        backgroundColor : '#04D361',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textbutton : {
        fontSize: 25,
        color : 'white', fontWeight:'bold',
        textAlign: 'center',
    }

})