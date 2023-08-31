import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    main:{
        height: '100%',
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
    },
    conteiner: {
        width: '100%',
        height: 150,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent:'center',
        gap: 30,

    },
    partecima:{
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        gap: 5
    },
    input: {
        backgroundColor: '#262626',
        width: 300,
        height: 55,
        borderRadius: 6,
        padding: 10
    },
    bottom: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'center',
    },
    inbutton :{
        fontSize: 25,
        color : 'white',
        textAlign: 'center',
    },
    secondbutton:{
        width: 25,
        height: 25,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2,          
    },

})