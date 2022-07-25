import { API } from './index';
import { AxiosResponse } from 'axios';
import { Players, Teams } from './types';

export const getTeams = (): Promise<AxiosResponse<Teams>> => {
    try {
        return API.get('/teams');
    } catch (error: any) {
        return error;
    }
}

export const getPlayers = (id: number): Promise<AxiosResponse<Players>> => {
    try {
        return API.get(`/players?team=${id}&season=2021`);
    } catch (error: any) {
        return error;
    }
}