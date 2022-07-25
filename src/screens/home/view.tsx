import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import { Team } from '../team/types';
import * as Type from './types';

export type HomeViewProps = {
    teams: Type.Teams[];
    onPress: (team: Team) => void;
};

export const HomeView: React.FC<HomeViewProps> = ({
    teams,
    onPress
}) => {
    const [queryText, setQueryText] = useState("" as string);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1 / 3,
                    aspectRatio: 1,
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    margin: 8,
                    padding: 8
                }}
                onPress={() => { onPress(item) }}
            >
                {item.logo ? (<Image
                    style={{
                        flex: 1
                    }}
                    resizeMode={'contain'}
                    source={{ uri: item.logo }}
                /> ) : (<Text style={{ textAlign: 'center' }}>{item.code}</Text>)}
            </TouchableOpacity>
        )
    }

    const renderHeader = () => {
        return (
            <View style={{ paddingVertical: 16, alignItems: 'center', flex: 1, marginHorizontal: 8 }}>
                <Image
                    style={{
                        height: 100,
                        marginBottom: 16
                    }}
                    resizeMode={'contain'}
                    source={require('./../../global/assets/images/nba-logo.png')}
                />
                <TextInput
                    autoCorrect={false}
                    placeholder="Insert a team name"
                    style={{ backgroundColor: '#FFFFFF', padding: 16, fontSize: 18, color: '#AAAAAA', width: '100%', borderWidth: 1, borderColor: '#1d428a' }}
                    onChangeText={(text) => setQueryText(text)}
                    value={queryText}
                />
            </View>
        );
    }

    const searchFilteredData = queryText
        ? teams.filter((x) =>
            x?.name?.toLowerCase().includes(queryText.toLowerCase())
        )
        : teams;


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <FlatList
                data={searchFilteredData}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                style={{ paddingHorizontal: 24 }}
            />
        </SafeAreaView>
    )
}