import { DefaultCrudRepository } from '@loopback/repository';
import { Orders, OrdersRelations } from '../models';
import { MlabDataSource } from '../datasources';
export declare class OrdersRepository extends DefaultCrudRepository<Orders, typeof Orders.prototype.id, OrdersRelations> {
    constructor(dataSource: MlabDataSource);
}
