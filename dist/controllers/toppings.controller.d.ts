import { Count, Filter, Where } from '@loopback/repository';
import { Toppings } from '../models';
import { ToppingsRepository } from '../repositories';
export declare class ToppingsController {
    toppingsRepository: ToppingsRepository;
    constructor(toppingsRepository: ToppingsRepository);
    create(toppings: Omit<Toppings, 'id'>): Promise<Toppings>;
    count(where?: Where<Toppings>): Promise<Count>;
    find(filter?: Filter<Toppings>): Promise<Toppings[]>;
    updateAll(toppings: Toppings, where?: Where<Toppings>): Promise<Count>;
    findById(id: string): Promise<Toppings>;
    updateById(id: string, toppings: Toppings): Promise<void>;
    replaceById(id: string, toppings: Toppings): Promise<void>;
    deleteById(id: string): Promise<void>;
}
