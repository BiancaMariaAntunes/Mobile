import {Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Product } from '../components/products';
import { useState } from 'react';

export default function Home(){
    const [products, setProducts] = useState<String[]>([]);
    const [productName, setProductName] = useState('')

    function handleProductAdd(){
        
        if(productName.trim().length > 0){

            if (products.includes(productName)){
                setProductName('')
                return Alert.alert("Problema", "-> Produto já existe")
               
            }

            setProducts([...products, productName.trimStart()])
            setProductName('')
        }else {
            Alert.alert("Problema ao adicionar produto", "-> Nome esta vazio")
        }

    }

    function handleProductRemove(name: String){
        Alert.alert('Remover', `Deseja remover o produto ${name}`, 
        [
            {
                text: 'Sim',
                onPress: () => setProducts(prevState => prevState.filter( prod => prod != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]
        )
    }

    return(
    <View style={styles.conteiner}>
        <Text style={styles.titulo}>Lista de compras</Text>
        <Text style={styles.data}> Quarta, 23 de Agosto de 2023</Text>
        
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Informe um produto'
                placeholderTextColor={"#ffff"}
                onChangeText={setProductName}
                value= {productName}

            />

            <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleProductAdd}>
                <Text style={styles.textButton}> Adicionar </Text>

            </TouchableOpacity>
        </View>

        <Text style={styles.titulo2}>Produtos</Text>


       <FlatList
       data={products}
       keyExtractor={item => item}
       renderItem={({item}) => (
        <Product key={item}
                     name={item}
                     onRemove={() => handleProductRemove(item)}/>

       )}
       ListEmptyComponent={() =>
        <Text style={styles.listEmpty}>Não existe produto na sua lista de compras</Text>
    
    }
       />


        
        
  </View>

    )
}