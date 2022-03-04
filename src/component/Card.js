import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Body, Item} from 'native-base';
import {useNavigation} from '@react-navigation/native';
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= props.item
  }

  render() {
    
    return (
      <Card
        style={{borderRadius: 10, width: '90%', marginLeft: 10, height: 300}}>
        <Image
          style={{
            width: '100%',
            height: '50%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={{uri: this.state.image}}
        />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => {
            this.props.navigation.navigate('ProductDetail', {item: this.props.item});
          }}>
          <Text style={{color: '#17c264', fontWeight: '700', marginTop: 15}}>
            {this.state.price}
          </Text>
          <Text style={styles.brand}>{this.state.brand}</Text>
          <Text style={styles.description} note>
            {this.state.description}
          </Text>
        </TouchableOpacity>
      </Card>
    );
  }
}

export default ProductCard;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 10,
  },
  brand: {
    color: '#313332',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  description: {
    color: '#737574',
    marginTop: 10,
  },
});
