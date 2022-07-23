import { API } from './index';
import { AxiosResponse } from 'axios';
import { Players, Teams } from './types';

export const getTeams = async (): Promise<AxiosResponse<Teams>> => {
    try {
        return await API.get('/teams');
    } catch (error: any) {
        return error;
    }
}

export const getPlayers = async (id: number): Promise<AxiosResponse<Players>> => {
    try {
        return await API.get(`/players?team=${id}&season=2021`);
    } catch (error: any) {
        return error;
    }
}