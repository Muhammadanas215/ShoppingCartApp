import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "../screens/ProductScreen";
import CheckOut from '../screens/CheckOut'



const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name='ProductScreen' component={ProductScreen} />
        <Tab.Screen name='CheckOut' component={CheckOut} />
        </Tab.Navigator>
    )
}

export default Tabs
