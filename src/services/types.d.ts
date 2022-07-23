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

export interface ResponseTeams {
    id: number;
    name: string;
    code: string;
    nickname?: string;
    leagues: Leagues[];
    search: string;
    city?: string;
    logo?: string;
    allStar: boolean;
    nbaFranchise: boolean;
}

export type Leagues = {
    [key in League]: LeaguesType
}

export interface LeaguesType {
    conference: Conference.East | Conference.West;
    division: Division.Atlantic | Division.Central | Division.Northwest | Division.Pacific | Division.Southeast | Division.Southwest;
    jersey?: number;
    active?: boolean;
    pos?: string;
}

export interface Teams {
    get: string;
    parameters?: any;
    errors?: any;
    results: number;
    response: ResponseTeams[];
}

export interface Africa {
    conference: Conference,
    division: Division
}

export interface Orlando {
    conference: Conference,
    division: Division
}

export interface Birth {
    date: string;
    country: string;
}

export interface Nba {
    start: number;
    pro: number;
}

export interface Height {
    feets: string;
    inches: string;
    meters: string;
}

export interface Weight {
    pounds: string;
    kilograms: string;
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
    leagues: Leagues;
}

export interface Players {
    get: string;
    parameters?: any;
    errors?: any;
    results: number;
    response: ResponsePlayers[];
}