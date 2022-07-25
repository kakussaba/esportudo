import React from 'react';
import * as S from './style';

type FlatListHeaderProps = {
    src: string | '';
    queryText: string;
    onChangeText: (text: string) => void;
    backgroundColor?: string;
};

export const FlatListHeader: React.FC<FlatListHeaderProps> = ({
    src,
    queryText,
    onChangeText,
    backgroundColor
}) => {
    return (
        <S.Container>
            {/*<S.Image
                resizeMode={'contain'}
                source={require(src)}
            />*/}
            <S.ContainerInput backgroundColor={backgroundColor}>
                <S.TextInput
                    autoCorrect={false}
                    placeholder="Insert a team name"
                    onChangeText={(text) => onChangeText(text)}
                    value={queryText}
                    autoFocus
                />
            </S.ContainerInput>
        </S.Container>
    )
}