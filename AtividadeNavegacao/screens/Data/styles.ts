import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    linear: {
        height: '100%',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 5
    },
    text1 : { 
        fontSize: 36,      
        fontWeight:'bold',
        color:'white',
        marginTop: 60
    },
    text2 : {
        color: '#5987CC',
        fontSize: 18,      
        fontWeight:'bold',
        marginRight: 10,
    },
    button: {
        height : 50,
        width : 340,
        backgroundColor: '#01633D',
        borderRadius: 15,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:30,
        marginLeft: 10
    },
    textbutton : { 
        color: 'white',
        fontSize: 22,      
        fontWeight:'bold',
        textAlign: 'center',

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
        fontSize: 25,
        marginBottom : 5
    },
    textinput : {
        fontSize: 18,      
        fontWeight:'bold',
        color:'white',
        marginBottom:8
    },
    main:{
        alignItems: 'center',
        marginTop: 10,
        gap : 10
    },
    viewinput: {
        gap : 5,
        marginBottom: 100,
    },
})