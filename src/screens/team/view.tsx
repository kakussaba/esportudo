import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Player } from '../player/types';
import * as Type from './types';

export type TeamViewProps = {
    players: Type.Players[];
    onPress: (player: Player) => void;
};

export const TeamView: React.FC<TeamViewProps> = ({
    players,
    onPress
}) => {
    const renderItem = ({ item }) => {
        const player = {
            birth: item.birth,
            firstname: item.firstname,
            height: item.height,
            id: item.id,
            lastname: item.lastname,
            weight: item.weight
        };

        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
                onPress={() => onPress(player)}
            >
                <View>
                    <Text>{item.lastname}</Text>
                    <Text>{item.firstname}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Carousel
                width={300}
                height={150}
                data={players}
                renderItem={renderItem}
            />
        </View>
    )
}