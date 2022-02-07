import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import UberX from '../assets/images/uberX.png';
import UberXL from '../assets/images/uberXL.png';
import UberLUX from '../assets/images/uberLUX.png';
import { useState } from 'react';

const data = [
  { id: 0, title: 'UberX', multipler: 1, image: UberX },
  { id: 1, title: 'UberXL', multipler: 1.2, image: UberXL },
  { id: 2, title: 'UberLUX', multipler: 1.75, image: UberLUX }
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={[tw`absolute top-3 left-5 p-3 rounded-full`, { zIndex: 1 }]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}
          >
            <View>
              <Image
                style={{ width: 85, height: 85, resizeMode: 'contain' }}
                source={{ uri: Image.resolveAssetSource(item.image).uri }}
              />
            </View>
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>time</Text>
            </View>
            <Text style={tw`text-xl`}>$100</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
        >
          <Text style={tw`text-center text-xl text-white `}>
            Choose {selected?.title}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
