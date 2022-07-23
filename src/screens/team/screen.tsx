import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { Players, PlayersTeam } from '../../services/types';
import { TeamView } from './view';
import Carousel from 'react-native-reanimated-carousel';
import { Team } from './types';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState({} as Players);
    const [responsePlayers, setResponsePlayers] = useState([] as PlayersTeam[]);

    useEffect(() => {
        getPlayers(team.id).then((response) => {
            setPlayers(response.data);
            setResponsePlayers(response.data.response);
        })
    }, []);

    const renderItem = ({ item }) => {
        console.log(item)
        const player = {
            birth: item.birth,
            firstname: item.firstname,
            height: item.height,
            id: item.id,
            lastname: item.lastname,
            weight: item.weight
        };

        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
                onPress={() => navigate('Player', { player })}
            >
                <View>
                    <Text>{item.lastname}</Text>
                    <Text>{item.firstname}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <TeamView />
            <View>
                <Carousel
                    width={300}
                    height={150}
                    data={responsePlayers}
                    renderItem={renderItem}
                />
            </View>
        </>
    )
}