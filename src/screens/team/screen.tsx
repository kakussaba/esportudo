import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { ResponsePlayers } from '../../services/types';
import { TeamView } from './view';
import { Team } from './types';
import { Loading } from '../../global/components/Loading'
import { useTheme } from 'styled-components/native';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false as boolean);
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState({} as ResponsePlayers[]);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await getPlayers(team.id);
            setPlayers(data.response);
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
        return <Loading color={colors.BLACK} />;
    }

    return (
        <TeamView
            team={team}
            players={players}
            onPress={(team, player, color) => { navigate('Player', { team: team, player: player, color: color }) }}
        />
    )
}