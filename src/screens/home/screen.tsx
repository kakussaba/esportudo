import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { Leagues, ResponseTeams, Teams } from '../../services/types';
import { HomeView } from './view';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const [teams, setTeams] = useState({} as Teams);
    const [responseTeams, setResponseTeams] = useState({} as ResponseTeams[]);

    useEffect(() => {
        getTeams().then((response) => {
            setTeams(response.data);
            setResponseTeams(response.data.response);
        })
    }, []);

    return (
        <>
            <HomeView
                teams={responseTeams}
                onPress={(team) => { navigate('Team', { team }) }}
            />
        </>
    )
}
