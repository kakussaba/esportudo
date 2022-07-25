import React from 'react';
import * as S from './style';

type EmptyListProps = {
    text: string;
};

export const EmptyList: React.FC<EmptyListProps> = ({
    text
}) => {
    return (
        <S.Container>
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}