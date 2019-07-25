import {DefaultCrudRepository} from '@loopback/repository';
import {Orders, OrdersRelations} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdersRepository extends DefaultCrudRepository<
  Orders,
  typeof Orders.prototype.id,
  OrdersRelations
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Orders, dataSource);
  }
}
