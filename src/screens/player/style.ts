import styled from 'styled-components/native';

type ContainerProps = {
    backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${(props) => props.backgroundColor }
    flex: 1;
    flex-direction: column;
`;

export const ContainerHeader = styled.View`
    flex: 0.4;
    padding: ${({ theme }) => theme.padding.LG};
    align-items: center;
`;

export const Logo = styled.Image`
    height: 150px;
    width: 150px;
`;

export const ContainerTitle = styled.View`
    margin: ${({ theme }) => theme.margin.SM} 0;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size:  ${({ theme }) => theme.fontSize.SM};
    font-weight: bold;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size:  ${({ theme }) => theme.fontSize.MD};
    font-weight: bold;
`;

export const Table = styled.View`
    flex: 0.6;
    flex-direction: column;
    background-color:${({ theme }) => theme.colors.WHITE};
    width: 100%;
    padding: ${({ theme }) => theme.padding.LG};
`;

export const TableRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;