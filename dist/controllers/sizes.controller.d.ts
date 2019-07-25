import { Count, Filter, Where } from '@loopback/repository';
import { Sizes } from '../models';
import { SizesRepository } from '../repositories';
export declare class SizesController {
    sizesRepository: SizesRepository;
    constructor(sizesRepository: SizesRepository);
    create(sizes: Omit<Sizes, 'id'>): Promise<Sizes>;
    count(where?: Where<Sizes>): Promise<Count>;
    find(filter?: Filter<Sizes>): Promise<Sizes[]>;
    updateAll(sizes: Sizes, where?: Where<Sizes>): Promise<Count>;
    findById(id: string): Promise<Sizes>;
    updateById(id: string, sizes: Sizes): Promise<void>;
    replaceById(id: string, sizes: Sizes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
