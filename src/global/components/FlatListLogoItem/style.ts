import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    flex: 1;
    aspectRatio: 1;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.BRIGHT_GRAY};
    border-radius: 10px;
    margin: ${({ theme }) => theme.margin.XXS};
    padding: ${({ theme }) => theme.padding.XXS};
    justify-content: center;
`;

export const Logo = styled.Image`
    flex: 0.8;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center
`;