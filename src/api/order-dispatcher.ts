/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
import express = require("express");

export const router = express.Router();

router.get('/api/v1/orders',((req, res) => {
    res.send('Get all orders');
}));

router.post('/api/v1/orders', (req, res)=>{
    res.send('Save a order');
});

router.put('/api/v1/orders', (req, res)=>{
    res.send('Update a order');
});

router.delete('/api/v1/orders', (req, res)=>{
    res.send('Delete a order');
});
