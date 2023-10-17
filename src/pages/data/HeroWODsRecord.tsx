export interface UserRank {
    id: number;
    activityid: number;
    name: string;
    minute?: number;
    second?: number;
}

export const UserRankList: UserRank[] = [
    {
        id: 1,
        activityid: 2,
        name: 'keeemhs',
        minute: 23,
        second: 4,
    },
    {
        id: 2,
        activityid: 4,
        name: 'keeemhs',
        minute: 23,
        second: 1,
    },
    {
        id: 3,
        activityid: 2,
        name: 'g__gyu_min',
        minute: 21,
        second: 4,
    },
    {
        id: 4,
        activityid: 2,
        name: 'hs_fitter',
        minute: 25,
        second: 4,
    },
    {
        id: 5,
        activityid: 3,
        name: 'g__gyu_min',
        minute: 31,
        second: 4,
    },
    {
        id: 6,
        activityid: 3,
        name: 'hs_fitter',
        minute: 25,
        second: 23,
    },
    {
        id: 7,
        activityid: 7,
        name: 'hs_fitter',
        minute: 23,
        second: 59,
    },
];
