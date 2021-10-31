export interface BasePlayer {
    name: string
};

export interface Player extends BasePlayer {
    country: string,
    winnings: number,
    imageUrl: string
};

export interface UpdateablePlayer {
    name?: string,
    winnings?: number
};
