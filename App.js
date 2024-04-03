import React from 'react';
import Soccer   from './Soccer/Soccer';
import { View , ImageBackground} from 'react-native';

export default function App() {
  return (
    <ImageBackground 
    source={{uri: 'https://th.bing.com/th/id/OIG2.In9jDPLaCbgTf56Rkv.W?pid=ImgGn'}}
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    resizeMode="cover"
    >
      <View style={{marginTop: 30}}>
        <Soccer />
      </View>
    </ImageBackground>
  );
}