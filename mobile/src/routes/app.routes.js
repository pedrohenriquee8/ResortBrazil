import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './../pages/Home';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    )
}