import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Loading } from '../../global/components/Loading';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { ResponseTeams, Teams } from '../../services/types';
import { HomeView } from './view';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
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
            {loading ? (
                <Loading color={colors.PRIMARY} />
            ) : (
                <HomeView
                    teams={responseTeams}
                    onPress={(team) => { navigate('Team', { team }) }}
                />
            )}
        </>
    )
}
