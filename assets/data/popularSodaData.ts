export type PopularSodaData = {
  id: string;
  image: any;
  title: string;
  rating: string;
  price: number;
  sizeName: string; // Small Medium Large
  sizeNumber: string; // 16oz 32oz 64oz
  deliveryTime: number;
};

const popularSodaData: PopularSodaData[] = [
  {
    id: '1',
    image: require('../images/jarritos.png'),
    title: 'Jarritos',
    rating: '5.0',
    price: 1.99,
    sizeName: 'Medium',
    sizeNumber: '32oz',
    deliveryTime: 30,
  },
  {
    id: '2',
    image: require('../images/fanta.png'),
    title: 'Fanta',
    rating: '5.0',
    price: 1.49,
    sizeName: 'Small',
    sizeNumber: '16oz',
    deliveryTime: 30,
  },
  {
    id: '3',
    image: require('../images/squirt.png'),
    title: 'Squirt',
    rating: '5.0',
    price: 1.0,
    sizeName: 'Medium',
    sizeNumber: '32oz',
    deliveryTime: 30,
  },
];

export default popularSodaData;
