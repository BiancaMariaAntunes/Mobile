import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header : {
        width : '100%',
        height: 60,
        backgroundColor: '#BE4646',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        fontSize: 25,
        color : '#FFFFFF', fontWeight:'bold',
    },
    text2 : {
        fontSize: 20,
        color : '#FFFFFF', fontWeight:'bold',
    },
    text3 : {
        fontSize: 25,
        color : '#FFFFFF', fontWeight:'bold',
    },
    input : {
        width : 175,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        color: '#6F6B73', fontWeight:'bold',
        padding: 5,
        fontSize: 20,
    },
    components :  {
        padding : 10,
        gap : 10
    },
    row : {
        flexDirection: 'row'
    },
    button : {
        width : 175,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#2B9C5E',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
    },
    meio : {
        width : '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap : 8,
        padding : 10
    },
    quadradomeio : {
        width : '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    textmeio : {
        fontSize: 16,
        color : '#2B9F82', fontWeight:'bold',
    }
})