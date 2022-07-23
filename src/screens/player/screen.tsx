import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { PlayerView } from './view';
import { Player } from './types';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Player'>;

export const PlayerScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const [player, setPlayer] = useState(route.params.player as Player);

    useEffect(() => {
        console.log(player)
    }, []);

    return (
        <>
            <PlayerView
                player={player}
            />
        </>
    )
}