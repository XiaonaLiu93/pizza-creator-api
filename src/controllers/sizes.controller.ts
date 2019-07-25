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
import { Sizes } from '../models';
import { SizesRepository } from '../repositories';

export class SizesController {
  constructor(
    @repository(SizesRepository)
    public sizesRepository: SizesRepository,
  ) { }

  @post('/sizes', {
    responses: {
      '200': {
        description: 'Sizes model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Sizes } } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sizes, { exclude: ['id'] }),
        },
      },
    })
    sizes: Omit<Sizes, 'id'>,
  ): Promise<Sizes> {
    return await this.sizesRepository.create(sizes);
  }

  @get('/sizes/count', {
    responses: {
      '200': {
        description: 'Sizes model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sizes)) where?: Where<Sizes>,
  ): Promise<Count> {
    return await this.sizesRepository.count(where);
  }

  @get('/sizes', {
    responses: {
      '200': {
        description: 'Array of Sizes model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Sizes } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sizes)) filter?: Filter<Sizes>,
  ): Promise<Sizes[]> {
    return await this.sizesRepository.find(filter);
  }

  @patch('/sizes', {
    responses: {
      '200': {
        description: 'Sizes PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sizes, { partial: true }),
        },
      },
    })
    sizes: Sizes,
    @param.query.object('where', getWhereSchemaFor(Sizes)) where?: Where<Sizes>,
  ): Promise<Count> {
    return await this.sizesRepository.updateAll(sizes, where);
  }

  @get('/sizes/{id}', {
    responses: {
      '200': {
        description: 'Sizes model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Sizes } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Sizes> {
    return await this.sizesRepository.findById(id);
  }

  @patch('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Sizes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sizes, { partial: true }),
        },
      },
    })
    sizes: Sizes,
  ): Promise<void> {
    await this.sizesRepository.updateById(id, sizes);
  }

  @put('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Sizes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sizes: Sizes,
  ): Promise<void> {
    await this.sizesRepository.replaceById(id, sizes);
  }

  @del('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Sizes DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sizesRepository.deleteById(id);
  }
}
