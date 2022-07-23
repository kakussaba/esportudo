import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { Players, PlayersTeam } from '../../services/types';
import { TeamView } from './view';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

type Team = {
    teamId: number;
    teamLogo: string;
}

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const [team, setTeam] = useState(route.params as Team);
    const [players, setPlayers] = useState({} as Players);
    const [responsePlayers, setResponsePlayers] = useState([] as PlayersTeam[]);

    useEffect(() => {
        getPlayers(team.teamId).then((response) => {
            setPlayers(response.data);
            setResponsePlayers(response.data.response);
            console.log(response)
        })
    }, []);

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
            >
                <View>
                    <Text>{ `${item.firstname} ${item.lastname}` }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <TeamView />
            <View>
                <FlatList
                    horizontal
                    data={responsePlayers}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                >
                </FlatList>
            </View>
        </>
    )
}