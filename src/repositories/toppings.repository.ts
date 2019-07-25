import {DefaultCrudRepository} from '@loopback/repository';
import {Toppings, ToppingsRelations} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ToppingsRepository extends DefaultCrudRepository<
  Toppings,
  typeof Toppings.prototype.id,
  ToppingsRelations
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Toppings, dataSource);
  }
}
