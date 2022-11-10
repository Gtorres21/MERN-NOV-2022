const Author = require('../models/author.model')

// ============ C . R. U. D ================



// Fancy Method
module.exports = {

    // Find All 
    findAll: (req, res) => {
        Author.find()
        .then(allDaAuthors => {
            res.json(allDaAuthors)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    //  Create One
    create: (req, res) => {
        console.log(req.body)
        Author.create(req.body)
            .then(newAuthor =>{
                console.log('✅✅✅✅- CREATED PRODUCT -✅✅✅✅✅')
                res.json(newAuthor)
            })
            .catch(err =>{
                console.log('❌✖❌- SERVER ERROR -✖❌✖')
                res.status(400).json(err)
            })
    },

    // Find One
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => {
                console.log('✅✅✅✅- FOUND PRODUCT -✅✅✅✅✅')
                res.json(oneAuthor)
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
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedAuthor => {
                console.log("✅✅✅- UPDATED PRODUCT-✅✅✅")
                res.json(updatedAuthor)
            })
            .catch(err => {
                console.log("❌✖❌- ERROR UPDATING PRODUCT-✖❌✖")
                res.status(400).json(err)
            })
    },

    // Delete One
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
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