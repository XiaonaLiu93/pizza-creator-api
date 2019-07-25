import { Entity } from '@loopback/repository';
export declare class Customers extends Entity {
    id?: string;
    name: string;
    email: string;
    address: string;
    postcode: string;
    PhoneNo: string;
    constructor(data?: Partial<Customers>);
}
export interface CustomersRelations {
}
export declare type CustomersWithRelations = Customers & CustomersRelations;
