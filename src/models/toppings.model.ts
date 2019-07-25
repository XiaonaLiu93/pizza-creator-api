import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Toppings extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  image: string;


  constructor(data?: Partial<Toppings>) {
    super(data);
  }
}

export interface ToppingsRelations {
  // describe navigational properties here
}

export type ToppingsWithRelations = Toppings & ToppingsRelations;
