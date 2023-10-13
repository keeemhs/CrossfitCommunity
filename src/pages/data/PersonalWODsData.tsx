export interface PersonalWOD {
    id: number;
    title: string;
    type: string;
    round: string;
    timeCap: string;
    activity: string;
    weight: string;
    createdOn: string;
}

export const PersonalWodsList: PersonalWOD[] = [
    {
        id: 1,
        title: 'KEEEMHS',
        type: 'For Time',
        round: '6',
        timeCap: '30',
        activity: '15 cal Rowing12 Wall Ball Shot9 Pull-Ups',
        weight: '(20/16 lb)',
        createdOn: '2020-10-04',
    },
];
