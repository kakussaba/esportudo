import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Loading } from '../../global/components/Loading';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { ResponseTeams } from '../../services/types';
import { HomeView } from './view';
import { Error, ErrorType } from '../../global/components/Error'

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false as boolean);
    const [teams, setTeams] = useState([] as ResponseTeams[]);
    const [error, setError] = useState({} as ErrorType);
    const [hasError, setHasError] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await getTeams();
            setTeams(data.response);

            if (data.results === 0) {
                setError({
                    title: 'No results',
                    text: 'No team found'
                });
                setHasError(true);
            }

        } catch (error) {
            setError({
                title: 'An error has occurred',
                text: 'Try again later'
            });
            setHasError(true);
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
        <>
            <HomeView
                teams={teams}
                onPress={(team) => { navigate('Team', { team }) }}
            />
            <Error error={error} hasError={hasError} />
        </>
    )
}
