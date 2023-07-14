import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        alignItems: "center",
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#212121',
        marginTop: 25,
        marginBottom: 20
    },
    input:{
        backgroundColor: '#EEE',
        width: '90%',
        borderWidth: 1,
        borderColor: '#131413',
        borderRadius: 5,
        padding: 10,
        fontSize: 20
    },
    areaBtn:{        
        flexDirection: 'row',  
        marginTop: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    
    btn:{
        height: 50,       
        padding: 10,    
        justifyContent: 'center',   
        alignItems: 'center',
        borderRadius: 5,
        margin: 20
        
    },
    text:{
        fontSize: 20,
        fontWeight: '600',
        color: '#2e2d2d',        
    },
    resultado:{
       marginTop: 50,
        justifyContent: 'center',       
        borderColor: '#131413',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15
    },
    itemText:{
        color: '#212121',
        fontSize: 20,
        fontWeight: '600'
    }
});

export default styles;