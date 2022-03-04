import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Body,
  Header,
  Left,
  Title,
  Button,
  Footer,
  FooterTab,
  Container,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item,
      count: 0,
    };
  }
  itemQuantity = () => {
    this.state.item.Quantity = this.state.count;
  }

  addToCart = () => {
    this.itemQuantity()
    this.props.addItemToCart(this.state.item);
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const {count} = this.state;
    return (
      <Container>
        <StatusBar />
        <Header
          androidStatusBarColor="white"
          style={{backgroundColor: 'white'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrowleft" size={30} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black', fontWeight: '900', fontSize: 23}}>
              {this.state.item.brand}
            </Title>
          </Body>
        </Header>
        <Content>
          <Image
            style={{
              maxWidth: 600,
              width: '100%',
              height: 250,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={{uri: this.state.item.image}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.state.item.brand}</Text>
            <Text style={{color: '#17c264', fontWeight: '700', marginTop: 15}}>
              {this.state.item.price}
            </Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              {this.state.item.description}
            </Text>
          </View>
          <View style={styles.countContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.decrement();
              }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.increment()
              }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <Button style={styles.btn} onPress={() => this.addToCart()}>
            <Text style={{fontSize: 20, color: 'white'}}>Add to Cart</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('ProductScreen');
              }}>
              <Icon name="home" size={25} style={{color: 'black'}} />
            </Button>
            <Button>
              <Icon name="enviroment" size={25} />
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('CheckOut', {item: this.props.item});
              }}>
              <View style={styles.count}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {this.itemQuantity()}
                </Text>
              </View>
              <Icon active name="shoppingcart" size={25} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

 const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
  };
}
 const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: item => dispatch({type: 'ADD_TO_CART', payload: item}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    height: 300,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: '#313332',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
  },
  descriptionText: {
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    color: '#363636',
  },
  btn: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#17c264',
  },
  countContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: '20%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#8d8e8f',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    width: '20%',
    textAlign: 'center',
    borderRadius: 10,
  },
  count: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(95, 197, 123,0.8)',
    right: 35,
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
});
