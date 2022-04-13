export type PopularSeaData = {
  id: string;
  image: any;
  title: string;
  rating: string;
  price: number;
  sizeName: string;
  sizeNumber: string;
  deliveryTime: number;
};

const popularSeaData: PopularSeaData[] = [
  {
    id: '1',
    image: require('../images/shrimp.png'),
    title: 'Fried Shrimp',
    rating: '5.0',
    price: 3.99,
    sizeName: 'Medium',
    sizeNumber: '16oz',
    deliveryTime: 30,
  },
];

export default popularSeaData;
