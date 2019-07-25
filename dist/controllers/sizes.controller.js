"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SizesController = class SizesController {
    constructor(sizesRepository) {
        this.sizesRepository = sizesRepository;
    }
    async create(sizes) {
        return await this.sizesRepository.create(sizes);
    }
    async count(where) {
        return await this.sizesRepository.count(where);
    }
    async find(filter) {
        return await this.sizesRepository.find(filter);
    }
    async updateAll(sizes, where) {
        return await this.sizesRepository.updateAll(sizes, where);
    }
    async findById(id) {
        return await this.sizesRepository.findById(id);
    }
    async updateById(id, sizes) {
        await this.sizesRepository.updateById(id, sizes);
    }
    async replaceById(id, sizes) {
        await this.sizesRepository.replaceById(id, sizes);
    }
    async deleteById(id) {
        await this.sizesRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/sizes', {
        responses: {
            '200': {
                description: 'Sizes model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Sizes } } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sizes, { exclude: ['id'] }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "create", null);
__decorate([
    rest_1.get('/sizes/count', {
        responses: {
            '200': {
                description: 'Sizes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Sizes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "count", null);
__decorate([
    rest_1.get('/sizes', {
        responses: {
            '200': {
                description: 'Array of Sizes model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Sizes } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Sizes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "find", null);
__decorate([
    rest_1.patch('/sizes', {
        responses: {
            '200': {
                description: 'Sizes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sizes, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Sizes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Sizes, Object]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/sizes/{id}', {
        responses: {
            '200': {
                description: 'Sizes model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Sizes } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/sizes/{id}', {
        responses: {
            '204': {
                description: 'Sizes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sizes, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Sizes]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/sizes/{id}', {
        responses: {
            '204': {
                description: 'Sizes PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Sizes]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/sizes/{id}', {
        responses: {
            '204': {
                description: 'Sizes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SizesController.prototype, "deleteById", null);
SizesController = __decorate([
    __param(0, repository_1.repository(repositories_1.SizesRepository)),
    __metadata("design:paramtypes", [repositories_1.SizesRepository])
], SizesController);
exports.SizesController = SizesController;
//# sourceMappingURL=sizes.controller.js.map