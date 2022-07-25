import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { PlayerView } from './view';
import { ColorTeam, Player } from './types';
import { Team } from '../team/types';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Player'>;

export const PlayerScreen: React.FC<TeamScreenProps> = ({ route }) => {
    const [team, setTeam] = useState(route.params.team as Team);
    const [player, setPlayer] = useState(route.params.player as Player);
    const [color, setColor] = useState(route.params.color as ColorTeam);

    return (
        <PlayerView
            team={team}
            player={player}
            color={color}
        />
    );
}