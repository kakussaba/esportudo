import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components/native';
import * as Type from './types';

export type PlayerViewProps = {
    player: Type.Player
};

export const PlayerView: React.FC<PlayerViewProps> = ({
    player
}) => {
    const { colors } = useTheme();
    return (
        <LinearGradient style={{ flex: 1 }} colors={colors.LINEAR_BLUE}>
            <View>
                <Text>{`${player.lastname} ${player.firstname}`}</Text>
                <Text>{player.birth.country || "Unknown"}</Text>
                <Text>{player.birth.date || "Unknown"}</Text>
                <Text>{player.height.meters}</Text>
                <Text>{player.weight.kilograms}</Text>
            </View>
        </LinearGradient>
    )
}