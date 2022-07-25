import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { Players, ResponsePlayers } from '../../services/types';
import { TeamView } from './view';
import { Team } from './types';
import { ActivityIndicator, View } from 'react-native';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const [loading, setLoading] = useState(false as boolean);
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState({} as Players);
    const [responsePlayers, setResponsePlayers] = useState([] as ResponsePlayers[]);

    useEffect(() => {
        setLoading(true);
        getPlayers(team.id).then(response => {
            setPlayers(response.data);
            setResponsePlayers(response.data.response);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })
    }, []);

    return (
        <>
            {loading ? (<View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#BBBBBB" />
            </View>) : (
                <TeamView
                    team={team}
                    players={responsePlayers}
                    onPress={(team, player, color) => { navigate('Player', { team: team, player: player, color: color }) }}
                />)}
        </>
    )
}