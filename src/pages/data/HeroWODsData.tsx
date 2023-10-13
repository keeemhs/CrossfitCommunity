export interface HeroWOD {
    id: number;
    title: string;
    type: string;
    round: string;
    timeCap: string;
    activity: string;
    weight: string;
    createdOn: string;
}

export const HeroWODsList: HeroWOD[] = [
    {
        id: 1,
        title: 'MURPH',
        type: 'For Time',
        round: '1',
        timeCap: '60',
        activity: '1 mile RUN100 PULL UPs200 PUSH UPs300 AIR SQUATS1 mile RUN',
        weight: '',
        createdOn: '2020-10-04',
    },
    {
        id: 2,
        title: 'LOONEY',
        type: 'For Time',
        round: '7',
        timeCap: '40',
        activity: '400 meter RUN29 OverHead Lunges',
        weight: '(95/65lb)',
        createdOn: '2021-10-04',
    },
    {
        id: 3,
        title: 'DORK',
        type: 'For Time',
        round: '6',
        timeCap: '25',
        activity: '60 Double-unders30 Kettlebell Swings15 Burpees',
        weight: '(24/16kg)',
        createdOn: '2021-10-04',
    },
    {
        id: 4,
        title: 'JASON',
        type: 'For Time',
        round: '1',
        timeCap: '25',
        activity: '100 Air Squiats5 Muscle-Ups75 Air Squiats10 Muscle-Ups50 Air Squiats15 Muscle-Ups25 Air Squiats20 Muscle-Ups',
        weight: '',
        createdOn: '2021-10-04',
    },
];
