import { DefaultCrudRepository } from '@loopback/repository';
import { Customer, CustomerRelations } from '../models';
import { MlabDataSource } from '../datasources';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    constructor(dataSource: MlabDataSource);
}
