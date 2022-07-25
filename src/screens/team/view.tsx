import { getMainColor } from 'nba-color';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ColorTeam, Player } from '../player/types';
import * as Type from './types';
import { FlatListHeader } from '../../global/components/FlatListHeader';
import { FlatListItem } from '../../global/components/FlatListItem';
import * as S from './style';
import { EmptyList } from '../../global/components/EmptyList';
import { FlatListSeparator } from '../../global/components/FlatListSeparator';

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
                src={team.logo}
                onChangeText={(text) => setQueryText(text)}
                backgroundColor={color.hex}
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
            {players.length > 0 ? (
                <FlatList
                    data={searchFilteredData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    ListHeaderComponent={renderHeader}
                    ItemSeparatorComponent={() => (<FlatListSeparator />)}
                />
            ) : (
                <EmptyList text="Players not found" />
            )}
        </S.Container>
    )
}