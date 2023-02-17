import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';

export class BookList extends Component {
  render() {
    return (
      <View>
        <FlatList  
            data={[{key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'}]}  
            renderItem={({item}) => <Text>{item.key}</Text>}  
            />  
      </View>
    )
  }
}

export default BookList;