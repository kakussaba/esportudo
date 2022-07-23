import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/index';
import { TeamScreen } from '../screens/team/screen';
import { NavigationStackParam } from './types';
import { PlayerScreen } from '../screens/player/screen';

const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={HomeScreen} />
                <Stack.Screen name={'Team'} component={TeamScreen} />
                <Stack.Screen name={'Player'} component={PlayerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};