import {DefaultCrudRepository} from '@loopback/repository';
import {Sizes, SizesRelations} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SizesRepository extends DefaultCrudRepository<
  Sizes,
  typeof Sizes.prototype.id,
  SizesRelations
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Sizes, dataSource);
  }
}
