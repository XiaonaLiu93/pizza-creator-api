import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Sizes extends Entity {
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
    type: 'string',
    required: true,
  })
  inch: string;

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


  constructor(data?: Partial<Sizes>) {
    super(data);
  }
}

export interface SizesRelations {
  // describe navigational properties here
}

export type SizesWithRelations = Sizes & SizesRelations;
