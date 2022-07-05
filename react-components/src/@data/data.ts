import { ICard } from '../@interfaces/ICard';

const houses: ICard[] = [
  {
    id: '1',
    name: 'ПРОЕКТ ОДНОЭТАЖНОГО ДОМА С МАНСАРДОЙ RL05',
    photoURL: 'https://archidom.by/wp-content/uploads/2020/07/RL05-1.jpg',
    price: '1 000',
    square: '158',
    height: '6,7',
    costOfConstruction: '35000',
  },
  {
    id: '2',
    name: 'Z11 – ТИПОВОЙ ПРОЕКТ ДАЧИ 8 НА 10',
    photoURL: 'https://archidom.by/wp-content/uploads/2014/12/Z11_11.jpg',
    price: '1 100',
    square: '65,0',
    height: '5,54',
    costOfConstruction: '17850',
  },
  {
    id: '3',
    name: 'Z62 – СОВРЕМЕННЫЙ ПРОЕКТ ДОМА ИЗ ГАЗОСИЛИКАТНЫХ БЛОКОВ',
    photoURL: 'https://archidom.by/wp-content/uploads/2015/01/Z62-proekt-mansardnogo-doma.jpg',
    price: '1 110',
    square: '82,7',
    height: '8,32',
    costOfConstruction: '55250',
  },
  {
    id: '4',
    name: 'Z16 – ТИПОВОЙ ПРОЕКТ ДЕРЕВЯННОГО ДОМА 8 НА 10',
    photoURL: 'https://archidom.by/wp-content/uploads/2014/12/Z16_1.jpg',
    price: '1 110',
    square: '83,7',
    height: '5,43',
    costOfConstruction: '22750',
  },
  {
    id: '5',
    name: 'Z16 – ТИПОВОЙ ПРОЕКТ ДЕРЕВЯННОГО ДОМА 8 НА 10',
    photoURL: 'https://archidom.by/wp-content/uploads/2014/12/Z20_1.jpg',
    price: '1 310',
    square: '150,2',
    height: '7,84',
    costOfConstruction: '82250',
  },
  {
    id: '6',
    name: 'Z10 – ТИПОВОЙ ПРОЕКТ КОТТЕДЖА',
    photoURL: 'https://archidom.by/wp-content/uploads/2014/12/z10_21.jpg',
    price: '1 230',
    square: '162,0',
    height: '6,78',
    costOfConstruction: '47000',
  },
];

export function getHouses(): ICard[] {
  return houses;
}
