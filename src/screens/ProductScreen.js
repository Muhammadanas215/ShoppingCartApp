import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import ProductCard from '../component/Card';
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

class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardItem: [
        {
          id: 1,
          image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/779d7180-6d1b-4cb6-9d68-0acbda0f43d5/free-metcon-4-training-shoes-Hq3dKD.png',
          price: '$124.69',
          brand: 'Nike Free Metcon 4',
          description: `Training Shoes`,
          Quantity: '',
        },
        {
          id: 2,
          image:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d5bc11d4-65e7-4254-a896-ee239ee280f5/air-zoom-pegasus-38-shield-weatherised-road-running-shoes-BKgmbZ.png',
          price: '$148.50',
          brand: 'Nike Air Zoom',
          description: `Men's Weatherised Road Running Shoes`,
          Quantity: '',
        },
        {
          id: 3,
          image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb9a7b1d-ae5f-4bf5-ac21-0089599b23f8/air-zoom-pegasus-38-air-jordan-moss-road-running-shoes-bWMjP2.png',
          price: '$180.50',
          brand: 'Nike Air Zoom Pegasus',
          description: `Men's Road Running Shoes`,
          Quantity: '',
        },
        {
          id: 4,
          image:
            'https://images.nike.com/is/image/DotCom/DM1610_001?$NIKE_PWP_GRAY$&wid=420&hei=420',
          price: '$158.60',
          brand: 'Nike Air Nathan Bell',
          description: `Road Running Shoes`,
          Quantity: '',
        },
        {
          id: 5,
          image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b4f37e03-cd2c-419b-93db-0912cb1cb4da/air-zoom-pegasus-38-air-jordan-moss-road-running-shoes-bWMjP2.png',
          price: '$114.95',
          brand: 'Nike AirJordan Moss',
          description: `Men's Road Shoes`,
          Quantity: '',
        },
        {
          id: 6,
          image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b45a0b64-77ad-424a-bec7-7bbb47b2a4ad/pegasus-trail-3-gore-tex-trail-running-shoes-FngTl6.png',
          price: '$134.95',
          brand: 'Nike Pegasus Trail 3',
          description: `Men's Trail Running Shoes`,
          Quantity: '',
        },
      ],
    };
  }
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="white"
          style={{backgroundColor: 'white'}}>
          <Left>
            <Button transparent>
              <Icon name="arrowleft" size={30} />
            </Button>
          </Left>

          <Body style={{marginLeft: 40}}>
            <Title style={{color: 'black', fontWeight: '900', fontSize: 23}}>
              Products
            </Title>
          </Body>
        </Header>
        <Content>
          <FlatList
            data={this.state.CardItem}
            numColumns={2}
            renderItem={({item, index}) => (
              <View
                key={index}
                style={{width: '50%', height: '70%', marginTop: 10}}>
                <ProductCard
                  key={index + 1}
                  item={item}
                  navigation={this.props.navigation}
                />
              </View>
            )}
          />
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button>
              <Icon name="home" size={25} style={{color: 'black'}} />
            </Button>
            <Button>
              <Icon name="enviroment" size={25} />
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('CheckOut');
              }}>
              <View style={styles.count}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {this.state.CardItem.Quantity}
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
export default ProductScreen;

const styles = StyleSheet.create({
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
