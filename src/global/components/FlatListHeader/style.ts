import styled from 'styled-components/native';

type ContainerInputProps = {
    backgroundColor: string;
}

export const Container = styled.View`
    padding: 0 16px;
    align-items: center;
`;

export const Image = styled.Image`
    height: 100px;
    width: 100px;
    margin: 8px 0;
`;

export const ContainerInput = styled.View<ContainerInputProps>`
    background-color: ${props => props.backgroundColor};
    width: 100%;
    padding: 32px;
`;

export const TextInput = styled.TextInput`
    backgroundColor:  ${({ theme }) => theme.colors.WHITE};
    padding: 16px;
    fontSize: 18px;
    color: ${({ theme }) => theme.colors.BLACK};
`;