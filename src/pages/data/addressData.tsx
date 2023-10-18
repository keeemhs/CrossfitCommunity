import Hannam from '../img/Hannam.png';
import Daul from '../img/Daul.png';
import Kano from '../img/Kano.png';
import Raon from '../img/Raon.jpeg';
import Mokdong from '../img/Mokdong.jpeg';
import VS from '../img/VS.png';
import Muhan from '../img/Muhan.png';
import Samson from '../img/Samson.png';
import Golden from '../img/Golden.png';
import UMV from '../img/UMV.png';
import Flow from '../img/Teamflow.png';
import Uri from '../img/Uri.png';
import Meta from '../img/Meta.png';
import Magical from '../img/Magical.png';
import Able from '../img/Able.png';
import Hound from '../img/Hound.png';
import Guts from '../img/Guts.png';
import R2G from '../img/R2G.png';
import Shooting from '../img/Shoting.jpeg';

export interface Address {
    id: number;
    address: string;
    name: string;
    img?: string;
}

export const addressData: Address[] = [
    {
        id: 1,
        address: '하남대로 21길 17',
        name: '크로스핏 한남',
        img: Hannam,
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
        img: Daul,
    },
    {
        id: 4,
        address: '역삼동 672-32',
        name: '크로스핏 카노',
        img: Kano,
    },
    {
        id: 5,
        address: '용마산로 36',
        name: '크로스핏 라온',
        img: Raon,
    },
    {
        id: 6,
        address: '오목로 194',
        name: '크로스핏 목동',
        img: Mokdong,
    },
    {
        id: 7,
        address: '화곡로 153',
        name: '크로스핏 강서',
    },
    {
        id: 8,
        address: '연세로9길 37',
        name: '크로스핏 VS',
        img: VS,
    },
    {
        id: 9,
        address: '염리동 174-18',
        name: '무한크로스핏',
        img: Muhan,
    },
    {
        id: 10,
        address: '삼일대로 363',
        name: '크로스핏 삼손',
        img: Samson,
    },
    {
        id: 11,
        address: '정동길 8',
        name: '콜든크라운 크로스핏 서대문',
        img: Golden,
    },
    {
        id: 12,
        address: '방배로 94',
        name: 'UMV 크로스핏',
        img: UMV,
    },
    {
        id: 13,
        address: '남부순환로269길 21',
        name: '팀플로우 크로스핏',
        img: Flow,
    },
    {
        id: 14,
        address: '관악로15길 47-5',
        name: '우리크로스핏',
        img: Uri,
    },
    {
        id: 15,
        address: '대학길 26',
        name: '메타크로스핏',
        img: Meta,
    },
    {
        id: 16,
        address: '백제고분로 354',
        name: '크로스핏 매지컬',
        img: Magical,
    },
    {
        id: 17,
        address: '송파동 32',
        name: '크로스핏 에이블',
        img: Able,
    },
    {
        id: 18,
        address: '송이로 166',
        name: '크로스핏 하운드',
        img: Hound,
    },
    {
        id: 19,
        address: '상동 463',
        name: '크로스핏 거츠',
        img: Guts,
    },
    {
        id: 20,
        address: '중동로 256',
        name: 'R2G 크로스핏',
        img: R2G,
    },
    {
        id: 21,
        address: '경인옛로 42',
        name: '크로스핏 슈팅스타',
        img: Shooting,
    },
];

export default addressData;
