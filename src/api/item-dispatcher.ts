/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
import express = require("express");

export const router = express.Router();

router.get('/api/v1/items',((req, res) => {
    res.send('Get all items');
}));

router.post('/api/v1/items', (req, res)=>{
    res.send('Save a item');
});

router.put('/api/v1/items', (req, res)=>{
    res.send('Update a item');
});

router.delete('/api/v1/items', (req, res)=>{
    res.send('Delete a item');
});
