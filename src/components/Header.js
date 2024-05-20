import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>

            <View style={styles.box1}>
            <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>Lista de Imagens</Text>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  
    box1: {
      backgroundColor: '#FA8072',
      height: 50,
      alignItems: 'center',
      borderRadius: 20
    },

});
