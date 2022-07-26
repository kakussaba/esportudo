import { getMainColor } from 'nba-color';
import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { ColorTeam, Player } from '../player/types';
import * as Type from './types';
import { FlatListHeader } from '../../global/components/FlatListHeader';
import { FlatListItem } from '../../global/components/FlatListItem';
import * as S from './style';
import { FlatListSeparator } from '../../global/components/FlatListSeparator';

export type TeamViewProps = {
    team: Type.Team;
    players: Type.Players[];
    onPress: (team: Type.Team, player: Player, color: ColorTeam) => void;
    refreshing: boolean;
    onRefresh: () => void;
    hasError: boolean;
};

export const TeamView: React.FC<TeamViewProps> = ({
    team,
    players,
    onPress,
    refreshing,
    onRefresh,
    hasError
}) => {
    const [queryText, setQueryText] = useState("");

    const color = getMainColor(team.code) || { hex: '#CCCCCC' };

    const renderItem = ({ item }) => {
        return (
            <FlatListItem
                item={item}
                team={team}
                color={color}
                onPress={() => onPress(team, item, color)}
            />
        )
    }

    const renderHeader = () => {
        return (
            <FlatListHeader
                queryText={queryText}
                src={{ uri: team.logo }}
                onChangeText={(text) => setQueryText(text)}
                backgroundColor={color.hex}
                placeholder="Insert a player name"
                hasError={hasError}
            />
        );
    }

    const searchFilteredData = queryText
        ? players.filter((x) =>
            x?.firstname?.toLowerCase().includes(queryText.toLowerCase()) || x?.lastname?.toLowerCase().includes(queryText.toLowerCase())
        )
        : players;

    return (
        <S.Container>
            <FlatList
                data={searchFilteredData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={() => (<FlatListSeparator />)}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </S.Container>
    )
}