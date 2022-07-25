import { getMainColor } from 'nba-color';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, TextInput } from 'react-native';
import { ColorTeam, Player } from '../player/types';
import * as Type from './types';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TeamViewProps = {
    team: Type.Team;
    players: Type.Players[];
    onPress: (team: Type.Team, player: Player, color: ColorTeam) => void;
};

export const TeamView: React.FC<TeamViewProps> = ({
    team,
    players,
    onPress,
}) => {
    const [queryText, setQueryText] = useState("" as string);

    const color = getMainColor(team.code) || { hex: '#CCCCCC' };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#FFFFFF',
                }}
                onPress={() => onPress(team, item, color)}
            >
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 32 }}>
                    <Text style={{ fontSize: 18, marginVertical: 8 }}>{`${item.firstname} ${item.lastname}`}</Text>
                    <Icon name="chevron-right" size={20} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderHeader = () => {
        return (
            <View style={{ padding: 32, alignItems: 'center', flex: 1, backgroundColor: color?.hex }}>
                {team.logo && (<Image
                    style={{
                        height: 100,
                        width: 100,
                        marginBottom: 16
                    }}
                    resizeMode={'contain'}
                    source={{ uri: team.logo }}
                />)}
                <TextInput
                    autoCorrect={false}
                    placeholder="Insert a player name"
                    style={{ backgroundColor: '#FFFFFF', padding: 16, fontSize: 18, color: '#AAAAAA', width: '100%' }}
                    onChangeText={(text) => setQueryText(text)}
                    value={queryText}
                />
            </View>
        );
    }

    const searchFilteredData = queryText
        ? players.filter((x) =>
            x?.firstname?.toLowerCase().includes(queryText.toLowerCase()) || x?.lastname?.toLowerCase().includes(queryText.toLowerCase())
        )
        : players;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <FlatList
                data={searchFilteredData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={() => (<View style={{ backgroundColor: "#EEEEEE", height: 2 }}></View>)}
                style={{ backgroundColor: '#FFFFFF' }}
            />
        </SafeAreaView>
    )
}