import styled from 'styled-components/native';

type ContainerProps = {
    backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${props => props.backgroundColor};
    padding: ${({ theme }) => theme.padding.SM} 0;
    align-items: center;
`;

export const Image = styled.Image`
    width: 100%;
    height: 150px;
    margin: ${({ theme }) => theme.margin.XXS} 0;
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: ${({ theme }) => theme.padding.SM};
`;

export const TextInput = styled.TextInput`
    backgroundColor:  ${({ theme }) => theme.colors.WHITE};
    padding: ${({ theme }) => theme.padding.SM};
    font-size: ${({ theme }) => theme.fontSize.XMD};
    color: ${({ theme }) => theme.colors.BLACK};
`;