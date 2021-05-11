"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
var express = require("express");
exports.router = express.Router();
exports.router.get('/api/v1/items', (function (req, res) {
    res.send('Get all items');
}));
exports.router.post('/api/v1/items', function (req, res) {
    res.send('Save a item');
});
exports.router.put('/api/v1/items', function (req, res) {
    res.send('Update a item');
});
exports.router.delete('/api/v1/items', function (req, res) {
    res.send('Delete a item');
});
//# sourceMappingURL=item-dispatcher.js.map