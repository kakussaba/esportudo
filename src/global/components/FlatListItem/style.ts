import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContainerInput = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin: 8px 0;
`;