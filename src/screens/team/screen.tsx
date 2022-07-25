import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavigationStackParam } from '../../routes/types';
import { getPlayers } from '../../services/nbaApi';
import { ResponsePlayers } from '../../services/types';
import { TeamView } from './view';
import { Team } from './types';
import { Loading } from '../../global/components/Loading'
import { Error, ErrorProps } from '../../global/components/Error'
import { useTheme } from 'styled-components/native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

type TeamScreenProps = StackScreenProps<NavigationStackParam, 'Team'>;

export const TeamScreen: React.FC<TeamScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false as boolean);
    const [team, setTeam] = useState(route.params.team as Team);
    const [players, setPlayers] = useState([] as ResponsePlayers[]);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const [error, setError] = useState({} as ErrorProps);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await getPlayers(team.id);
            setPlayers(data.response);

            if (data.results === 0) {
                setError({
                    title: 'No results',
                    text: 'No player found'
                });
            }
        } catch (error) {
           setError({
               title: 'An error has occurred',
               text: 'Try again later'
           });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        openBottomSheet();
    }, [error])

    const openBottomSheet = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, [bottomSheetModalRef]);

    if (loading) {
        return <Loading color={colors.BLACK} />;
    }

    return (
        <>
            <TeamView
                team={team}
                players={players}
                onPress={(team, player, color) => { navigate('Player', { team: team, player: player, color: color }) }}
            />
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backdropComponent={BottomSheetBackdrop}
            >
                <Error title={error.title} text={error.text} />
            </BottomSheetModal>
        </>
    );
}