import React from 'react';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import theme from '../global/theme/default';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const CoreRoute = () => (
    <ThemeProvider theme={theme}>
        <BottomSheetModalProvider>
            <Routes />
        </BottomSheetModalProvider>
    </ThemeProvider>
);