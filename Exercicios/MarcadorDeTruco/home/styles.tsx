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