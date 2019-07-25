import { DefaultCrudRepository } from '@loopback/repository';
import { Toppings, ToppingsRelations } from '../models';
import { MlabDataSource } from '../datasources';
export declare class ToppingsRepository extends DefaultCrudRepository<Toppings, typeof Toppings.prototype.id, ToppingsRelations> {
    constructor(dataSource: MlabDataSource);
}
