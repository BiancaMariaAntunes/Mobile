import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner : {
        width : '100%',
        height: '100%',
        backgroundColor: '#383535',
        flexDirection: 'column',
        gap: 5
    },
    view : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        alignItems: 'center',
        justifyContent: 'center',
        width : 170,
        height : 50,
        backgroundColor: '#D32904',
        borderRadius : 10
    },
    textbutton : {
        fontSize: 25,
        color : '#FFFFFF', fontWeight:'bold',
    }
})