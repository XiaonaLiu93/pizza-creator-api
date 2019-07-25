import { Entity } from '@loopback/repository';
export declare class Toppings extends Entity {
    id?: string;
    name: string;
    price: number;
    image: string;
    constructor(data?: Partial<Toppings>);
}
export interface ToppingsRelations {
}
export declare type ToppingsWithRelations = Toppings & ToppingsRelations;
