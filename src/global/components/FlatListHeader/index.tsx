import React from 'react';
import * as S from './style';

type FlatListHeaderProps = {
    src: any;
    queryText: string;
    onChangeText: (text: string) => void;
    backgroundColor?: string;
    placeholder: string;
};

export const FlatListHeader: React.FC<FlatListHeaderProps> = ({
    src,
    queryText,
    onChangeText,
    backgroundColor,
    placeholder
}) => {
    return (
        <S.Container backgroundColor={backgroundColor}>
            <S.Image
                resizeMode={'contain'}
                source={src}
            />
            <S.ContainerInput>
                <S.TextInput
                    autoCorrect={false}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeText(text)}
                    value={queryText}
                    autoFocus
                />
            </S.ContainerInput>
        </S.Container>
    )
}