const express = require ('express');
const router = express.Router();
const foodPlan = require('../models/food');


router.post('/food',function(req,res,next){
    foodPlan.create(req.body).then(function(food){
        res.send(food);
    })
    .catch(next);
});
