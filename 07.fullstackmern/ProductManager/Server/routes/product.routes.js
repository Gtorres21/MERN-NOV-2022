const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    // FIND ALL ****************
    app.get('/api/product', ProductController.findAll);
    // Find By ID **************
    app.get('/api/product/:id', ProductController.findOne);
    // Create ******************
    app.post('/api/product', ProductController.create);
    // Update ******************
    app.put('/api/product/:id', ProductController.updateOne);
    // Delete ******************
    app.delete('/api/product/:id', ProductController.delete);
}