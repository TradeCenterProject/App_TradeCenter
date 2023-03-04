import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from '../BottomTab/Tabs';
import Stack from '../Stack/Stack';

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator screenOptions={{headerShown: false}}>
      <Nav.Screen name="Stack" component={Stack} />
      {/* <Nav.Screen name="Tabs" component={Tabs} /> */}
    </Nav.Navigator>
  );
};

export default Root;
