const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function(req,res){
    const foundProducts = await Product.find({})
    return res.json(foundProducts)
})

router.get('/:productId', async function(req,res){
    const productId = req.params.productId
    try {
        const foundProducts = await Product.findById(productId)
        return res.json(foundProducts)
    }catch(err){
        return res.status(422).send({errors:[{title:'Product Error',detail: 'Product not found'}]})
    }
})

module.exports = router