import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContainerInput = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => theme.padding.SM} ${({ theme }) => theme.padding.LG};
`;

export const Title = styled.Text`
    font-size:  ${({ theme }) => theme.fontSize.XMD};
    margin: ${({ theme }) => theme.margin.XXS} 0;
`;