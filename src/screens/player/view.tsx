import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Type from './types';

export type PlayerViewProps = {
    player: Type.Player
};

export const PlayerView: React.FC<PlayerViewProps> = ({
    player
}) => {
    const {colors} = useTheme();
    return (
        <View>
            <Text>{`${player.lastname} ${player.firstname}`}</Text>
            <Text>{player.birth.country || "Unknown" }</Text>
            <Text>{player.birth.date || "Unknown" }</Text>
            <Text>{player.height.meters}</Text>
            <Text>{player.weight.kilograms}</Text>
        </View>
    )
}