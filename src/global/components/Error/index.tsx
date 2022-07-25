import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

export type ErrorType = {
    title: string,
    text: string
}
export type ErrorProps = {
    error: ErrorType;
    hasError: boolean;
};

export const Error: React.FC<ErrorProps> = ({
    error,
    hasError
}) => {
    const { colors } = useTheme();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['20%', '30%'], []);
    const [show, setShow] = useState(hasError as boolean);

    const openBottomSheet = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, [bottomSheetModalRef]);

    useEffect(() => {
        show && openBottomSheet();
    }, [show])

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={BottomSheetBackdrop}
        >
            <S.Container>
                <Icon name="warning" size={40} color={colors.ORANGE} />
                <S.Title>{error.title}</S.Title>
                <S.Text>{error.text}</S.Text>
            </S.Container>
        </BottomSheetModal>

    )
}