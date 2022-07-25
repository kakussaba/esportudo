import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { ResponsePlayers } from '../../services/types';
import { TeamView } from './view';
import { Team } from './types';
import { Loading } from '../../global/components/Loading'
import { Error, ErrorType } from '../../global/components/Error'
import { useTheme } from 'styled-components/native';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false as boolean);
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState([] as ResponsePlayers[]);
    const [error, setError] = useState({} as ErrorType);
    const [hasError, setHasError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getData = async (isLoading) => {
        try {
            isLoading ? setLoading(true) : setRefreshing(true);
            const { data } = await getPlayers(team.id);
            setPlayers(data.response);

            if (data.results === 0) {
                setError({
                    title: 'No results',
                    text: 'No player found'
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
            isLoading ? setLoading(false) : setRefreshing(false);
        }
    }

    const onRefresh = React.useCallback(() => {
        getData(false);
    }, []);

    useEffect(() => {
        getData(true);
    }, []);

    if (loading) {
        return <Loading color={colors.BLACK} />;
    }

    return (
        <>
            <TeamView
                team={team}
                players={players}
                onPress={(team, player, color) => { navigate('Player', { team: team, player: player, color: color }) }}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
           <Error error={error} hasError={hasError} />
        </>
    );
}