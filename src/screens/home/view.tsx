import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { FlatListHeader } from '../../global/components/FlatListHeader';
import { Team } from '../team/types';
import * as Type from './types';
import { useTheme } from 'styled-components/native';
import { FlatListLogoItem } from '../../global/components/FlatListLogoItem';

export type HomeViewProps = {
    teams: Type.Teams[];
    onPress: (team: Team) => void;
    refreshing: boolean;
    onRefresh: () => void;
    hasError: boolean;
};

export const HomeView: React.FC<HomeViewProps> = ({
    teams,
    onPress,
    refreshing,
    onRefresh,
    hasError
}) => {
    const { colors } = useTheme();
    const [queryText, setQueryText] = useState("");

    const renderItem = ({ item }) => {
        return (
            <FlatListLogoItem
                item={item}
                onPress={() => onPress(item)}
            />
        )
    }

    const renderHeader = () => {
        return (
            <FlatListHeader
                src={require("./../../global/assets/images/nba-logo.png")}
                queryText={queryText}
                onChangeText={(text) => setQueryText(text)}
                backgroundColor={colors.PRIMARY}
                placeholder="Insert a team name"
                hasError={hasError}
            />
        );
    }

    const searchFilteredData = queryText
        ? teams.filter((x) =>
            x?.name?.toLowerCase().includes(queryText.toLowerCase())
        )
        : teams;


    return (
        <FlatList
            data={searchFilteredData}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            showsVerticalScrollIndicator={false}
        />
    )
}