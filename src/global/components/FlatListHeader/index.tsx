import React from 'react';
import * as S from './style';

type FlatListHeaderProps = {
    src: any;
    queryText: string;
    onChangeText: (text: string) => void;
    backgroundColor?: string;
    placeholder: string;
    hasError: boolean;
};

export const FlatListHeader: React.FC<FlatListHeaderProps> = ({
    src,
    queryText,
    onChangeText,
    backgroundColor,
    placeholder,
    hasError
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
                    autoFocus={!hasError}
                />
            </S.ContainerInput>
        </S.Container>
    )
}