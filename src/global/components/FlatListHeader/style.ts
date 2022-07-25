import styled from 'styled-components/native';

type ContainerInputProps = {
    backgroundColor: string;
}

export const Container = styled.View`
    padding: 0 ${({ theme }) => theme.padding.SM};
    align-items: center;
`;

export const Image = styled.Image`
    height: 100px;
    width: 100px;
    margin: ${({ theme }) => theme.margin.XXS} 0;
`;

export const ContainerInput = styled.View<ContainerInputProps>`
    background-color: ${props => props.backgroundColor};
    width: 100%;
    padding: ${({ theme }) => theme.padding.LG};
`;

export const TextInput = styled.TextInput`
    backgroundColor:  ${({ theme }) => theme.colors.WHITE};
    padding: ${({ theme }) => theme.padding.SM};
    font-size: ${({ theme }) => theme.fontSize.XMD};
    color: ${({ theme }) => theme.colors.BLACK};
`;