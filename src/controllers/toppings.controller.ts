import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import { Toppings } from '../models';
import { ToppingsRepository } from '../repositories';

export class ToppingsController {
  constructor(
    @repository(ToppingsRepository)
    public toppingsRepository: ToppingsRepository,
  ) { }

  @post('/toppings', {
    responses: {
      '200': {
        description: 'Toppings model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Toppings } } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Toppings, { exclude: ['id'] }),
        },
      },
    })
    toppings: Omit<Toppings, 'id'>,
  ): Promise<Toppings> {
    return await this.toppingsRepository.create(toppings);
  }

  @get('/toppings/count', {
    responses: {
      '200': {
        description: 'Toppings model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Toppings)) where?: Where<Toppings>,
  ): Promise<Count> {
    return await this.toppingsRepository.count(where);
  }

  @get('/toppings', {
    responses: {
      '200': {
        description: 'Array of Toppings model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Toppings } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Toppings)) filter?: Filter<Toppings>,
  ): Promise<Toppings[]> {
    return await this.toppingsRepository.find(filter);
  }

  @patch('/toppings', {
    responses: {
      '200': {
        description: 'Toppings PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Toppings, { partial: true }),
        },
      },
    })
    toppings: Toppings,
    @param.query.object('where', getWhereSchemaFor(Toppings)) where?: Where<Toppings>,
  ): Promise<Count> {
    return await this.toppingsRepository.updateAll(toppings, where);
  }

  @get('/toppings/{id}', {
    responses: {
      '200': {
        description: 'Toppings model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Toppings } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Toppings> {
    return await this.toppingsRepository.findById(id);
  }

  @patch('/toppings/{id}', {
    responses: {
      '204': {
        description: 'Toppings PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Toppings, { partial: true }),
        },
      },
    })
    toppings: Toppings,
  ): Promise<void> {
    await this.toppingsRepository.updateById(id, toppings);
  }

  @put('/toppings/{id}', {
    responses: {
      '204': {
        description: 'Toppings PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() toppings: Toppings,
  ): Promise<void> {
    await this.toppingsRepository.replaceById(id, toppings);
  }

  @del('/toppings/{id}', {
    responses: {
      '204': {
        description: 'Toppings DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.toppingsRepository.deleteById(id);
  }
}
