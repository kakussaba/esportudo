import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { parseDate } from '../../global/utils/utils';
import { Team } from '../team/types';
import * as Type from './types';

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
        <View style={{ backgroundColor: color.hex, flex: 1, alignItems: 'center', padding: 32 }}>
            {team.logo && (<Image
                style={{
                    height: 150,
                    width: 150
                }}
                resizeMode={'contain'}
                source={{ uri: team.logo }}
            />)}
            <View style={{ marginVertical: 16 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{`${team.name} | #${player.nba.pro}`}</Text>
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 'bold' }}>{`${player.firstname} ${player.lastname}`}</Text>
            <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0,0,0,.2)', width: '100%', marginVertical: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center', flex: 0.5, paddingVertical: 8, paddingHorizontal: 16 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Height</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{player.height.meters || "-"}m</Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 0.5, paddingVertical: 8, paddingHorizontal: 16 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Weight</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{player.weight.kilograms || "-"}kg</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center', flex: 0.5, paddingVertical: 8, paddingHorizontal: 16 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Country</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{player.birth.country || "Unknown"}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 0.5, paddingVertical: 8, paddingHorizontal: 16 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Birtdhay</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>{parseDate(player.birth.date) || "Unknown"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}