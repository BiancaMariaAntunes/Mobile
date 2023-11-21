import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    linear: {
        height: '100%',
        alignItems: 'center',
    },
    main:{
        alignItems: 'center',
        flex: 1,
        padding: 10
    },
    div : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        height: 500, 

    },
    text1 : { 
        fontSize: 36,      
        fontWeight:'bold',
        color:'white',
        marginTop: 90
    },
    input:{
        height : 50,
        width : 350,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        color: '#6F6B73',
        fontWeight:'bold',
        padding: 10,
        fontSize: 25
    },
    viewinput: {
        gap: 13,
        marginBottom: 50
    },
    textinput : {
        fontSize: 18,      
        fontWeight:'bold',
        color:'white',
        marginLeft: 5,
    },
    text2 : {
        color: '#5987CC',
        fontSize: 18,      
        fontWeight:'bold',
    },
    button: {
        height : 50,
        width : 340,
        backgroundColor: '#01633D',
        borderRadius: 15,
        textAlign: 'center',
        marginBottom: 30,
        justifyContent:'center',
        alignItems: 'center',
    },
    textbutton : { 
        color: 'white',
        fontSize: 22,      
        fontWeight:'bold',
        textAlign: 'center'
    }
})