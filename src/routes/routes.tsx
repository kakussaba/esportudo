import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/index';
import { TeamScreen } from '../screens/team/screen';
import { NavigationStackParam } from './types';
import { PlayerScreen } from '../screens/player/screen';
import RNBootSplash from "react-native-bootsplash";
import { enableScreens } from 'react-native-screens';
import { useTheme } from 'styled-components';
import { getMainColor } from 'nba-color';

enableScreens();
const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
    const { colors } = useTheme();

    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={HomeScreen} options={{
                    title: 'NBA Teams',
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTintColor: colors.WHITE,
                }} />
                <Stack.Screen name={'Team'} component={TeamScreen} options={
                    ({ route }) => ({ 
                        title: route.params.team.name,
                        headerStyle: {
                            backgroundColor: getMainColor(route.params?.team?.code)?.hex || colors.PRIMARY,
                        },
                        headerTintColor: colors.WHITE,
                    })
                } />
                <Stack.Screen name={'Player'} component={PlayerScreen} options={
                    ({ route }) => ({ 
                        title: route.params.player.firstname,
                        headerStyle: {
                            backgroundColor: getMainColor(route.params?.team?.code)?.hex || colors.PRIMARY,
                        },
                        headerTintColor: colors.WHITE,
                    })
                } />
            </Stack.Navigator>
        </NavigationContainer>
    );
};