import { DefaultCrudRepository } from '@loopback/repository';
import { Sizes, SizesRelations } from '../models';
import { MlabDataSource } from '../datasources';
export declare class SizesRepository extends DefaultCrudRepository<Sizes, typeof Sizes.prototype.id, SizesRelations> {
    constructor(dataSource: MlabDataSource);
}
