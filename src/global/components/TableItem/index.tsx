import React from 'react';
import * as S from './style';

type TableItemProps = {
    title: string;
    text: string;
};

export const TableItem: React.FC<TableItemProps> = ({
    title,
    text
}) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}