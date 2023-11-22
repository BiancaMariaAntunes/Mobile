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
        marginTop: 70
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
        justifyContent:'center',
        alignItems: 'center',
    },
    textbutton : { 
        color: 'white',
        fontSize: 22,      
        fontWeight:'bold',
        textAlign: 'center'
    },
    main:{
        alignItems: 'center',
        padding: 10,
        gap: 50,
        marginTop: 60
    },
    viewinput: {
        gap: 13,
        marginBottom: -40,

    },
    grade: {
        height : 50,
        width : 340,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    textinput : {
        fontSize: 18,      
        fontWeight:'bold',
        color:'white',
        marginLeft: 5,
    },
    textgrade : {
        fontSize: 18,      
        fontWeight:'bold',
        color:'#1A254E',
        padding: 10
    }
})