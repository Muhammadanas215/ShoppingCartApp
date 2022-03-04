import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {
  Body,
  Header,
  Left,
  Title,
  Button,
  Footer,
  FooterTab,
  Right,
  Container,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';


class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: '',
    };
  }

  render() {
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
          <Body style={{marginLeft: 30}}>
            <Title style={{color: 'black', fontWeight: '900', fontSize: 23}}>
              <Text>Check Out</Text>
            </Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
              <Icon name="enviroment" size={25} color="#17c264" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                Delivery Address
              </Text>
              <Right>
                <Icon name="edit" size={25} color="#17c264" />
              </Right>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Address"
                placeholderTextColor="black"
              />
            </View>
            <Button style={styles.btn}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                Add Address
              </Text>
            </Button>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
              <Icon name="profile" size={25} color="#17c264" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                Order Summary
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                1x Deal
              </Text>
              <Right>
                <Text style={{fontWeight: '900', fontSize: 15}}>$189</Text>
              </Right>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                paddingTop: 10,
              }}
            />
            <View style={styles.iconContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                Sub Total
              </Text>
              <Right>
                <Text style={{fontWeight: '900', fontSize: 15}}>$189</Text>
              </Right>
            </View>
            <View style={styles.iconContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                Discount
              </Text>
              <Right>
                <Text style={{fontWeight: '900', fontSize: 15}}>$0</Text>
              </Right>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginLeft: 10,
                  color: 'black',
                }}>
                Confirm (Inc.VAL)
              </Text>
              <Right>
                <Text style={{fontWeight: '900', fontSize: 15}}>$150</Text>
              </Right>
            </View>
            <Button style={styles.btn}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                Confirm Order
              </Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button onPress={() => {
                this.props.navigation.navigate('ProductScreen');
              }}>
              <Icon name="home" size={25} style={{color: 'black'}} />
            </Button>
            <Button>
              <Icon name="enviroment" size={25} />
            </Button>
            <Button>
              <Icon active name="shoppingcart" size={25} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default CheckOut

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    marginTop: 5,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#17c264',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 20,
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
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
