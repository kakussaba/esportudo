//Leagues
export enum League {
    Africa = "africa",
    Orlando = "orlando",
    Sacramento = "sacramento",
    Standard = "standard",
    Utah = "utah",
    Vegas = "vegar"
}

export enum Conference {
    East = "East",
    West = "West"
}

export enum Division {
    Atlantic = "Atlantic",
    Central = "Central",
    Northwest = "Northwest",
    Pacific = "Pacific",
    Southeast = "Southeast",
    Southwest = "Southwest"
}

export type LeaguesType = {
    [key in League]: LeaguesContentType
}

export type LeaguesContentType = {
    conference: Conference.East | Conference.West;
    division: Division.Atlantic | Division.Central | Division.Northwest | Division.Pacific | Division.Southeast | Division.Southwest;
    jersey?: number;
    active?: boolean;
    pos?: string;
}

//Teams
export interface Teams {
    get: string;
    parameters?: any;
    errors?: any;
    results: number;
    response: ResponseTeams[];
}

export interface ResponseTeams {
    id: number;
    name: string;
    code: string;
    nickname?: string;
    leagues: LeaguesType[];
    search: string;
    city?: string;
    logo?: string;
    allStar: boolean;
    nbaFranchise: boolean;
}

//Players
export type Birth = {
    date: string;
    country: string;
}

export type Nba = {
    start: number;
    pro: number;
}

export type Height = {
    feets: string;
    inches: string;
    meters: string;
}

export type Weight = {
    pounds: string;
    kilograms: string;
}

export interface Players {
    get: string;
    parameters?: any;
    errors?: any;
    results: number;
    response: ResponsePlayers[];
}

export interface ResponsePlayers {
    id: number;
    firstname: string;
    lastname: string;
    birth: Birth;
    nba: Nba;
    height: Height;
    weight: Weight;
    college: string;
    affiliation: string;
    leagues: LeaguesType;
}