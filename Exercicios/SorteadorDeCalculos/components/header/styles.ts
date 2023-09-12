import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inicio : {
        alignItems: 'center',
        width: '100%',
        height: 170,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: 25,
        gap: 10
    },
    texto : {
        fontSize: 25,
        color : '#FFFFFF', fontWeight:'bold',
    },
    pontos : {
        padding: 5,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto2 : {
        fontSize: 15,
        color : '#4EA8DE', fontWeight:'bold',
    },
    texto3 : {
        fontSize: 17,
        color : '#D34C6C', fontWeight:'bold',
    },
    texto4 : {
        fontSize: 15,
        color : 'white', fontWeight:'bold',
    },
    gap : {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    }, 
    button : {
        backgroundColor: '#5D5FEF',
        width: 280,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbutton : {
        fontSize: 20,
        color : 'white', fontWeight:'bold',
        textAlign: 'center',
    }

})