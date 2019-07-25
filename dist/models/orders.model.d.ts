import { Entity } from '@loopback/repository';
export declare class Orders extends Entity {
    id?: string;
    customer: object;
    size: object;
    toppings: object[];
    constructor(data?: Partial<Orders>);
}
export interface OrdersRelations {
}
export declare type OrdersWithRelations = Orders & OrdersRelations;
