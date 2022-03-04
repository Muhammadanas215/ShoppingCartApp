
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from "../screens/ProductScreen";
import CheckOut from '../screens/CheckOut';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from '../screens/ProductDetail'



const Stack = createStackNavigator();
const Stacks = () => {
    return (
   
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}}/>
        <Stack.Screen name='CheckOut' component={CheckOut}  options={{headerShown: false}}/>
        </Stack.Navigator>
</NavigationContainer>

    )

}

export default Stacks
