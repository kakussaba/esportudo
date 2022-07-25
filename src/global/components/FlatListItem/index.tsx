import React from 'react';
import * as S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

type FlatListItemProps = {
    team?: any;
    color?: any
    item: any;
    onPress: (team: any, item: any, color: any) => void;
};

export const FlatListItem: React.FC<FlatListItemProps> = ({
    team,
    color,
    item,
    onPress
}) => {
    return (
        <S.Button
            onPress={() => onPress(team, item, color)}
        >
            <S.ContainerInput>
                <S.Title>{`${item.firstname} ${item.lastname}`}</S.Title>
                <Icon name="chevron-right" size={20} />
            </S.ContainerInput>
        </S.Button>
    )
}