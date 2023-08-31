import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   
    pontos: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    } ,
    mainbottom: {
        marginTop:70,
        gap : 15
    },
    bottomtxt: {
        fontSize: 35,
        color : '#FFFFFF', fontWeight:'bold',

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
    nos : {
        fontSize: 30,
        color:'#4AA5F9', fontWeight : 'bold'
    },
    eles : {
        fontSize: 30,
        color:'#C08DF3', fontWeight : 'bold',
        
    },
    numberNos : {
        fontSize: 150,
        color:'#4AA5F9', fontWeight : 'bold',
        marginTop:-30,
    },
 
    numberEles : {
        fontSize: 150,
        color:'#C08DF3', fontWeight : 'bold',
        marginTop:-30,
    },

})