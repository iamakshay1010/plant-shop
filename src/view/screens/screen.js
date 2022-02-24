import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function HomeScreen({navigation,route}) {
    const { itemId, otherParam,name,age } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home details here with {itemId}</Text>
        <Text>Home details here with {age}</Text>
        <Text>Home details here with {name}</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }
  