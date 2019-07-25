import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Orders extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'object',
    required: true,
  })
  customer: object;

  @property({
    type: 'object',
    required: true,
  })
  size: object;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  toppings: object[];


  constructor(data?: Partial<Orders>) {
    super(data);
  }
}

export interface OrdersRelations {
  // describe navigational properties here
}

export type OrdersWithRelations = Orders & OrdersRelations;
