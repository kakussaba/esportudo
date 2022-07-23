import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { Leagues, ResponseTeams, Teams } from '../../services/types';
import { HomeView } from './view';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const [teams, setTeams] = useState({} as Teams);
    const [responseTeams, setResponseTeams] = useState({} as ResponseTeams[]);
    const [leagues, setLeagues] = useState({} as Leagues[]);

    useEffect(() => {
        getTeams().then((response) => {
            setTeams(response.data);
            setResponseTeams(response.data.response);
        })
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1 / 3,
                    aspectRatio: 1,
                    backgroundColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
                onPress={() => { navigate('Team', { teamId: item.id, teamLogo: item.logo }) }}
            >
                <Image
                    style={{
                        flex: 1
                    }}
                    resizeMode={'contain'}
                    source={{ uri: item.logo }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <HomeView />
            <View>
                <FlatList
                    data={responseTeams}
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                    renderItem={renderItem}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}
