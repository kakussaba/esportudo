import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { FlatListHeader } from '../../global/components/FlatListHeader';
import { Team } from '../team/types';
import * as Type from './types';
import * as S from './style';
import { useTheme } from 'styled-components/native';
import { FlatListLogoItem } from '../../global/components/FlatListLogoItem';

export type HomeViewProps = {
    teams: Type.Teams[];
    onPress: (team: Team) => void;
};

export const HomeView: React.FC<HomeViewProps> = ({
    teams,
    onPress
}) => {
    const { colors } = useTheme();
    const [queryText, setQueryText] = useState("" as string);

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
                src="./../../global/assets/images/nba-logo.png"
                queryText={queryText}
                onChangeText={(text) => setQueryText(text)}
                backgroundColor={colors.PRIMARY}
            />
        );
    }

    const searchFilteredData = queryText
        ? teams.filter((x) =>
            x?.name?.toLowerCase().includes(queryText.toLowerCase())
        )
        : teams;


    return (
        <S.Container>
            <FlatList
                data={searchFilteredData}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
            />
        </S.Container>
    )
}