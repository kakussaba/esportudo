import React from 'react';
import * as S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export type ErrorProps = {
    title: string;
    text: string;
};

export const Error: React.FC<ErrorProps> = ({
    title,
    text
}) => {
    return (
        <S.Container>
            <Icon name="warning" size={20} />
            <S.Text>{title}</S.Text>
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}