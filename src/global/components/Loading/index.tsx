import React from 'react';
import { ActivityIndicator } from "react-native";
import * as S from './style';

type LoadingProps = {
    color?: string | '#DDDDDD';
};

export const Loading: React.FC<LoadingProps> = ({
    color
}) => {
    return (
        <S.Container>
            <ActivityIndicator size="large" color={color} />
        </S.Container>
    )
}