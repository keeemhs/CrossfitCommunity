export interface Link {
    id: number;
    url: string;
    text: string;
    isLoginLogout?: boolean;
}

export const links: Link[] = [
    {
        id: 1,
        url: '/Crossfit',
        text: 'CrossFit',
    },
    {
        id: 2,
        url: '/Location',
        text: 'Location',
    },
    {
        id: 3,
        url: '/HeroWODs',
        text: 'HeroWODs',
    },
    {
        id: 4,
        url: '/PersonalWODs',
        text: 'PersonalWODs',
    },
    {
        id: 5,
        url: '/mypage',
        text: 'Login',
        isLoginLogout: true,
    },
];
