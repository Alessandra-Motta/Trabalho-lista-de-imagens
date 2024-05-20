import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from './src/components/Header';


export default function App() {
  return (
    <View style={styles.container}>

    <ScrollView showsVerticalScrollIndicator={false}>

    <Header />

      <View style={styles.img}>

      <Image 
      source={{uri: 'https://ae01.alicdn.com/kf/S6c5b5431b15242d1b4e44b001031218eB/Coleira-anti-lamber-e-morder-vergonha-para-gatos-chapelaria-imperme-vel-para-gatinho-anti-lamber-e.jpg'}}
      style={{width: 500, height: 500}}
      />

      </View>

      <View style={styles.img}>
        
      <Image 
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YE_ugVDg-tMEXuqR03TmypEXQ2VRxdTqx4jRN0ZcJnYtLUnJrFmYk1M6rmGaI0uAeVw&usqp=CAU'}}
      style={{width: 500, height: 500}}
      />
      <Text style={{fontSize: 50}}>Aceitas?</Text>

      </View>
  
      <View style={styles.img}>

      <Image 
      source={{uri: 'https://stickerly.pstatic.net/sticker_pack/FdxanrrcgtPZdMHPc9DNw/U2X3A9/15/5c7fc312-6aaf-4a5e-bc16-864988ee0734.png'}}
      style={{width: 500, height: 500}}
      />

      </View>
      
      <View style={styles.img}>

      <Image 
      source={{uri: 'https://stickerly.pstatic.net/sticker_pack/FdxanrrcgtPZdMHPc9DNw/U2X3A9/15/cc95e5a6-5c4f-476b-b033-e1928394716f.png'}}
      style={{width: 500, height: 500}}
      />

      </View>
      
      <View style={styles.img}>

      <Image 
      source={{uri: 'https://i.pinimg.com/originals/02/8f/ac/028fac670a4101695f0d9ccecd42fed6.jpg'}}
      style={{width: 500, height: 500}}
      />

      </View>
      
      <View style={styles.img}>

      <Image 
      source={{uri: 'https://files.passeidireto.com/912af586-fa7d-4a64-b6f3-2199c7d8d815/912af586-fa7d-4a64-b6f3-2199c7d8d815.jpeg'}}
      style={{width: 500, height: 500}}
      />

      </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 6,
    padding: 6,
    backgroundColor: 'white',
  },

  img: {
    padding: 10,
  }

});
