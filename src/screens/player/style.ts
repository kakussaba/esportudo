import styled from 'styled-components/native';

type ContainerProps = {
    backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${(props) => props.backgroundColor }
    flex: 1;
    align-items: center;
    padding: 32px;
`;

export const Logo = styled.Image`
    height: 150px;
    width: 150px;
`;

export const ContainerTitle = styled.View`
    margin: 16px 0;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 16px;
    font-weight: bold;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 26px;
    font-weight: bold;
`;

export const Table = styled.View`
    flex-direction: column;
    width: 100%;
    margin: 16px 0;
`;

export const TableRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;