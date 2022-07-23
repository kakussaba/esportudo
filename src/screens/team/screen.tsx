import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { Players, ResponsePlayers } from '../../services/types';
import { TeamView } from './view';
import { Team } from './types';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState({} as Players);
    const [responsePlayers, setResponsePlayers] = useState([] as ResponsePlayers[]);

    useEffect(() => {
        getPlayers(team.id).then((response) => {
            setPlayers(response.data);
            setResponsePlayers(response.data.response);
        })
    }, []);

    return (
        <>
            <TeamView
                players={responsePlayers}
                onPress={(player) => { navigate('Player', { player }) }}
            />
        </>
    )
}