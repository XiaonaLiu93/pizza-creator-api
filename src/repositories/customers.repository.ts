import {DefaultCrudRepository} from '@loopback/repository';
import {Customers, CustomersRelations} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomersRepository extends DefaultCrudRepository<
  Customers,
  typeof Customers.prototype.id,
  CustomersRelations
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Customers, dataSource);
  }
}
