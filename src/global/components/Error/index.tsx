import React from 'react';
import * as S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

export type ErrorProps = {
    title: string;
    text: string;
};

export const Error: React.FC<ErrorProps> = ({
    title,
    text
}) => {
    const { colors } = useTheme();
    return (
        <S.Container>
            <Icon name="warning" size={40} color={colors.ORANGE} />
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}