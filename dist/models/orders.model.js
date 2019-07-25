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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Orders = class Orders extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'object',
        required: true,
    }),
    __metadata("design:type", Object)
], Orders.prototype, "customer", void 0);
__decorate([
    repository_1.property({
        type: 'object',
        required: true,
    }),
    __metadata("design:type", Object)
], Orders.prototype, "size", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    __metadata("design:type", Array)
], Orders.prototype, "toppings", void 0);
Orders = __decorate([
    repository_1.model({ settings: {} }),
    __metadata("design:paramtypes", [Object])
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.model.js.map