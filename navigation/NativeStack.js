import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToVia from './TouristVillage'
import Welcome  from '../Welcome';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ToVia" component={ToVia} />
    </Stack.Navigator>
  );
}

export default MyStack