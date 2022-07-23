type Birth = {
    country?: string;
    date?: string;
}

type Height = {
    feets?: string;
    inches?: string;
    meters?: string;
}

type Weight = {
    kilograms?: string;
    pounds?: string;
}

export type Player = {
    birth: Birth;
    firstname: string;
    height: Height;
    id: number;
    lastname: string;
    weight: Weight;
}