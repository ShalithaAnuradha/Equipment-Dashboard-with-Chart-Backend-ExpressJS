"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
var customer_dispatcher_1 = require("./customer-dispatcher");
var item_dispatcher_1 = require("./item-dispatcher");
var order_dispatcher_1 = require("./order-dispatcher");
var express = require("express");
exports.router = express.Router();
exports.router.use(customer_dispatcher_1.router);
exports.router.use(item_dispatcher_1.router);
exports.router.use(order_dispatcher_1.router);
//# sourceMappingURL=main-dispatcher.js.map