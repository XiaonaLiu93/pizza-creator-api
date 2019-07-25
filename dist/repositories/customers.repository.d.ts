import { DefaultCrudRepository } from '@loopback/repository';
import { Customers, CustomersRelations } from '../models';
import { MlabDataSource } from '../datasources';
export declare class CustomersRepository extends DefaultCrudRepository<Customers, typeof Customers.prototype.id, CustomersRelations> {
    constructor(dataSource: MlabDataSource);
}
