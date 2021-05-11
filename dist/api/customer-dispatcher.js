"use strict";
/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var mysql = require("mysql");
exports.router = express.Router();
exports.router.get('/api/v1/customers', (function (req, res) {
    var result = { "id": "C002" };
    res.status(200).json(result);
}));
exports.router.post('/api/v1/customers', function (req, res) {
    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(function (err) {
        if (err) {
            console.log("Failed to establish the database connection");
            throw err;
        }
        var id = req.body.id;
        var name = req.body.name;
        var address = req.body.address;
        connection.query('INSERT INTO customer VALUES (?,?,?)', [id, name, address], function (err, result) {
            if (err) {
                console.error("Failed to insert the Customer", err);
            }
            else {
                if (result.affectedRows > 0) {
                    res.status(201).json(true);
                }
                else {
                    res.status(400).json(false);
                }
            }
        });
        connection.end();
    });
});
exports.router.put('/api/v1/customers', function (req, res) {
    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(function (err) {
        if (err) {
            console.log("Failed to establish the database connection");
            throw err;
        }
        var id = req.body.id;
        var name = req.body.name;
        var address = req.body.address;
        connection.query('UPDATE customer SET name = ?, address = ? WHERE id = ?', [name, address, id], function (err, result) {
            if (err) {
                console.error("Failed to Update the Customer", err);
            }
            else {
                if (result.affectedRows > 0) {
                    res.status(204).json(true);
                }
                else {
                    res.status(400).json(false);
                }
            }
        });
        connection.end();
    });
});
exports.router.delete('/api/v1/customers/', function (req, res) {
    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(function (err) {
        if (err) {
            console.log("Failed to establish the database connection");
            throw err;
        }
        var id = req.query.id;
        /* req.query :	an object containing all the query strings used in the request*/
        connection.query('DELETE FROM customer WHERE id = ?', [id], function (err, result) {
            if (err) {
                console.error("Failed to insert the Customer", err);
            }
            else {
                if (result.affectedRows > 0) {
                    res.status(204).json(true);
                }
                else {
                    res.status(400).json(false);
                }
            }
        });
        connection.end();
        // console.log(req.body.id);
        // console.log(req.body);
        // console.log(req.query);
        // console.log(req.query.id);
        // for (const key in req.query) {
        //     console.log(key, req.query[key])
        // }
    });
});
//# sourceMappingURL=customer-dispatcher.js.map