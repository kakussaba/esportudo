import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { PlayerView } from './view';
import { ColorTeam, Player } from './types';
import { Team } from '../team/types';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Player'>;

export const PlayerScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false as boolean);
    const [team, setTeam] = useState(route.params.team as Team);
    const [player, setPlayer] = useState(route.params.player as Player);
    const [color, setColor] = useState(route.params.color as ColorTeam);

    useEffect(() => {
    }, []);

    return (
        <>
            {loading ? (<View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#1d428a" />
            </View>) : (
                <PlayerView
                    team={team}
                    player={player}
                    color={color}
                />)}
        </>
    )
}