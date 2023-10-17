// addressData.tsx
export interface Address {
    id: number;
    address: string;
    name: string;
}

export const addressData: Address[] = [
    {
        id: 1,
        address: '하남대로 21길 17',
        name: '크로스핏 한남',
    },
    {
        id: 2,
        address: '신사동 612-1',
        name: '크로스핏 압구정',
    },
    {
        id: 3,
        address: '능동로 253',
        name: '크로스핏 다울',
    },
    {
        id: 4,
        address: '역삼동 672-32',
        name: '크로스핏 카노',
    },
    {
        id: 5,
        address: '용마산로 36',
        name: '크로스핏 라온',
    },
];

export default addressData;
