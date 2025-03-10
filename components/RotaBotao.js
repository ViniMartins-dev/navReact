import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import PlacaMae from './PlacaMae';
import PlacaVideo from './PlacaVideo';

const Stack = createStackNavigator();

export default function RotaBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PlacaMae" component={PlacaMae} />
                <Stack.Screen name="PlacaVideo" component={PlacaVideo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}