import React from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Team } from '../team/types';
import * as Type from './types';

export type HomeViewProps = {
    teams: Type.Teams[];
    onPress: (team: Team) => void;
};

export const HomeView: React.FC<HomeViewProps> = ({
    teams,
    onPress
}) => {

    const renderItem = ({ item }) => {
        const team = {
            id: item.id
        }
        return (
            <TouchableOpacity
                style={{
                    flex: 1 / 3,
                    aspectRatio: 1,
                    backgroundColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
                onPress={() => { onPress(team) }}
            >
                <Image
                    style={{
                        flex: 1
                    }}
                    resizeMode={'contain'}
                    source={{ uri: item.logo }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={teams}
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                    renderItem={renderItem}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}