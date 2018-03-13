import { Record, OrderedMap, List } from 'immutable';

  //attributes :id
  //attribute :price
  //attribute :created_at
  //attribute :name
  //attribute :number
  //attribute :status
  //attribute :restaurant
  //has_one  :table
  //has_many :order_items

export const OrderRecord = Record({
  id: 0,
  price: '',
  name: '',
  number: '',
  status: null,
  restaurant: null,
  table: null,
  order_items: null,
  created_at: '',
});

export default Record({
  entities: OrderedMap(),
  isFetching: false,
  error: '',
});
