import { API } from './index';
import { AxiosResponse } from 'axios';
import { Players, Teams } from './types';

export const getTeams = () => API.get<AxiosResponse<Teams>>('/teams');

export const getPlayers = (id: number) => API.get<AxiosResponse<Players>>(`/players?team=${id}&season=2021`);