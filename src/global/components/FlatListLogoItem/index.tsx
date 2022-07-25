import React from 'react';
import * as S from './style';

type FlatListLogoItemProps = {
    item: any;
    onPress: (item: any) => void;
};

export const FlatListLogoItem: React.FC<FlatListLogoItemProps> = ({
    item,
    onPress
}) => {
    return (
        <S.Button
            onPress={() => { onPress(item) }}
        >
            {item.logo ? (
                <S.Logo
                    resizeMode={'contain'}
                    source={{ uri: item.logo }}
                />
            ) : (
                <S.Title>{item.code}</S.Title>
            )}
        </S.Button>
    )
}