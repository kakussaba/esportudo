import React from 'react';
import * as S from './style';

export enum UnitType {
    'meters' = "m",
    'kilograms' = "kg"
}
type TableItemProps = {
    title: string;
    text: string;
    type?: UnitType;
};

export const TableItem: React.FC<TableItemProps> = ({
    title,
    text,
    type
}) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Text>{text}{type}</S.Text>
        </S.Container>
    )
}