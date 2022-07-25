import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.WHITE};
    align-items: center;
    margin-top: 32px;
`;

export const Title = styled.Text`
    font-weight: bold;
    margin: 16px 0;
    font-size: 18px;
`;

export const Text = styled.Text`
    font-size: 16px;
`;