import React from 'react';
import { TableItem, UnitType } from '../../global/components/TableItem';
import { parseDate } from '../../global/utils/utils';
import { Team } from '../team/types';
import * as Type from './types';
import * as S from './style';

export type PlayerViewProps = {
    team: Team,
    player: Type.Player,
    color: Type.ColorTeam
};

export const PlayerView: React.FC<PlayerViewProps> = ({
    team,
    player,
    color
}) => {
    return (
        <S.Container backgroundColor={color.hex}>
            <S.ContainerHeader>
                {team.logo && (
                    <S.Logo
                        resizeMode={'contain'}
                        source={{ uri: team.logo }}
                    />
                )}
                <S.ContainerTitle>
                    <S.Title>{`${team.name} | #${player.nba.pro}`}</S.Title>
                </S.ContainerTitle>
                <S.Name>{`${player.firstname} ${player.lastname}`}</S.Name>
            </S.ContainerHeader>
            <S.Table>
                <S.TableRow>
                    <TableItem title="Height" text={player.height?.meters || "-"} type={UnitType.meters} />
                    <TableItem title="Weight" text={player.weight?.kilograms || "-"} type={UnitType.kilograms} />
                </S.TableRow>
                <S.TableRow>
                    <TableItem title="Country" text={player.birth.country || "-"} />
                    <TableItem title="Birtdhay" text={parseDate(player.birth.date) || "-"} />
                </S.TableRow>
            </S.Table>
        </S.Container>
    )
}