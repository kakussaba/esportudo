import React from 'react';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import theme from '../global/theme/default';

export const CoreRoute = () => (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
);