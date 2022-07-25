import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.WHITE};
    align-items: center;
    margin-top: ${({ theme }) => theme.margin.LG};
`;

export const Title = styled.Text`
    font-weight: bold;
    margin: ${({ theme }) => theme.margin.SM} 0;
    font-size: ${({ theme }) => theme.fontSize.XMD} ;
`;

export const Text = styled.Text`
    font-size:  ${({ theme }) => theme.fontSize.SM};
`;