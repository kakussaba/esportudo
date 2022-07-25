import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex: 0.5;
    padding: 8px 16px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 18px;
`;