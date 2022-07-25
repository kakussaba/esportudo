import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex: 0.5;
    padding: ${({ theme }) => theme.padding.XXS} ${({ theme }) => theme.padding.SM};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.BLACK};
    font-size:  ${({ theme }) => theme.fontSize.SM};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.margin.XXXS};
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.BLACK};
    font-size:  ${({ theme }) => theme.fontSize.XMD};
`;