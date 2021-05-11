/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/

import express = require("express");
import mysql = require('mysql')

export const router = express.Router();


router.get('/api/v1/customers',((req, res) => {

    let result = {"id":"C002"};
    res.status(200).json(result)

}));

router.post('/api/v1/customers', (req, res)=>{

    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(err=>{
        if(err){
            console.log("Failed to establish the database connection");
            throw err;
        }
        let id = req.body.id;
        let name = req.body.name;
        let address = req.body.address;

        connection.query('INSERT INTO customer VALUES (?,?,?)',
            [id,name,address],(err,result)=>{
                if(err){
                    console.error("Failed to insert the Customer",err);
                }else{
                    if(result.affectedRows>0){
                        res.status(201).json(true);
                    }else{
                        res.status(400).json(false);
                    }
                }
            });

        connection.end();
    })
});

router.put('/api/v1/customers', (req, res)=>{
    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(err=>{
        if(err){
            console.log("Failed to establish the database connection");
            throw err;
        }
        let id = req.body.id;
        let name = req.body.name;
        let address = req.body.address;

        connection.query('UPDATE customer SET name = ?, address = ? WHERE id = ?',
            [name, address, id],(err,result)=>{
                if(err){
                    console.error("Failed to Update the Customer",err);
                }else{
                    if(result.affectedRows>0){
                        res.status(204).json(true);
                    }else{
                        res.status(400).json(false);
                    }
                }
            });

        connection.end();
    })

});

router.delete('/api/v1/customers/', (req, res)=>{
    var connection = mysql.createConnection({
        user: 'root',
        password: '1234',
        database: 'dep6',
        host: 'localhost'
    });
    connection.connect(err=>{
        if(err){
            console.log("Failed to establish the database connection");
            throw err;
        }
        let id = req.query.id;
        /* req.query :	an object containing all the query strings used in the request*/

        connection.query('DELETE FROM customer WHERE id = ?',
            [id],(err,result)=>{
                if(err){
                    console.error("Failed to insert the Customer",err);
                }else{
                    if(result.affectedRows>0){
                        res.status(204).json(true);
                    }else{
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
    })
});

