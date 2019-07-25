import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id?: string;
    name: string;
    email: string;
    address: string;
    postcode: string;
    phoneNo: string;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;
