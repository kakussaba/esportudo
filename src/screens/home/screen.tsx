import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { ResponseTeams, Teams } from '../../services/types';
import { HomeView } from './view';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const [loading, setLoading] = useState(false as boolean);
    const [teams, setTeams] = useState({} as Teams);
    const [responseTeams, setResponseTeams] = useState([] as ResponseTeams[]);

    useEffect(() => {
        setLoading(true);
        getTeams().then(response => {
            setTeams(response.data);
            setResponseTeams(response.data.response);
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })
    }, []);

    return (
        <>
            {loading ? (<View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#1d428a" />
            </View>) : (<HomeView
                teams={responseTeams}
                onPress={(team) => { navigate('Team', { team }) }}
            />)}
        </>
    )
}
