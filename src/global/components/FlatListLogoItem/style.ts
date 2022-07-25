import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    flex: 0.3;
    aspectRatio: 1;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.WHITE};
    margin: ${({ theme }) => theme.margin.XXS};
    padding: ${({ theme }) => theme.padding.XXS};
`;

export const Logo = styled.Image`
    flex: 1;
`;

export const Title = styled.Text`
    text-align: center
`;