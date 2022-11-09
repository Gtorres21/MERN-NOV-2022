const Product = require('../models/product.models')

// ============ C . R. U. D ================



// Fancy Method
module.exports = {

    // Find All 
    findAll: (req, res) => {
        Product.find()
        .then(allDaProducts => {
            res.json(allDaProducts)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    //  Create One
    create: (req, res) => {
        console.log(req.body)
        Product.create(req.body)
            .then(newProduct =>{
                console.log('✅✅✅✅- CREATED PRODUCT -✅✅✅✅✅')
                res.json(newProduct)
            })
            .catch(err =>{
                console.log('❌✖❌- SERVER ERROR -✖❌✖')
                res.json(err)
            })
    },

    // Find One
    findOne: (req, res) => {
        Product.findById(req.params.id)
            .then(oneProduct => {
                console.log('✅✅✅✅- FOUND PRODUCT -✅✅✅✅✅')
                res.json(oneProduct)
            })
            .catch(err => {
                console.log('❌✖❌✖- ERROR FINDING PRODUCT -❌✖❌✖')
                res.json(err)
            })
    },

    // Update One
    updateOne: (req, res) => {
        console.log("Updated ID:", req.params.id);
        console.log("req.body:", req.body)
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedProduct => {
                console.log("✅✅✅- UPDATED PRODUCT-✅✅✅")
                res.json(updatedProduct)
            })
            .catch(err => {
                console.log("❌✖❌- ERROR UPDATING PRODUCT-✖❌✖")
                res.json(err)
            })
    },

    // Delete One
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => {
                console.log("✅✅✅- DELETED PRODUCT-✅✅✅")
                res.json(result)
            })
            .catch(err => {
                console.log("❌✖❌- ERROR DELETING PRODUCT-✖❌✖")
                res.json(err)
            })
    }
    
    
}