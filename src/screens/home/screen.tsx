import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Loading } from '../../global/components/Loading';
import { NavigationStackParam } from '../../routes/types';
import { getTeams } from '../../services/nbaApi';
import { ResponseTeams } from '../../services/types';
import { HomeView } from './view';
import { Error, ErrorProps } from '../../global/components/Error'

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { navigate } = navigation;
    const { colors } = useTheme();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [loading, setLoading] = useState(false as boolean);
    const [teams, setTeams] = useState([] as ResponseTeams[]);
    const snapPoints = useMemo(() => ['20%', '30%'], []);
    const [error, setError] = useState({} as ErrorProps);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await getTeams();
            setTeams(data.response);

            if (data.results === 0) {
                setError({
                    title: 'No results',
                    text: 'No team found'
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
        openBottomSheet();
    }, []);

    useEffect(() => {
        openBottomSheet();
    }, [error])

    const openBottomSheet = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, [bottomSheetModalRef]);

    if (loading) {
        return <Loading color={colors.PRIMARY} />;
    }

    return (
        <>
            <HomeView
                teams={teams}
                onPress={(team) => { navigate('Team', { team }) }}
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
    )
}
