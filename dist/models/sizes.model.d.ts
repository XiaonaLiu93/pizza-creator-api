import { Entity } from '@loopback/repository';
export declare class Sizes extends Entity {
    id?: string;
    name: string;
    inch: string;
    price: number;
    image: string;
    constructor(data?: Partial<Sizes>);
}
export interface SizesRelations {
}
export declare type SizesWithRelations = Sizes & SizesRelations;
