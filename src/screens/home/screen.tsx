import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Loading } from '../../global/components/Loading';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { ResponseTeams } from '../../services/types';
import { HomeView } from './view';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false as boolean);
    const [teams, setTeams] = useState({} as ResponseTeams[]);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await getTeams();
            setTeams(data.response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <Loading color={colors.PRIMARY} />;
    }

    return (
        <HomeView
            teams={teams}
            onPress={(team) => { navigate('Team', { team }) }}
        />
    )
}
