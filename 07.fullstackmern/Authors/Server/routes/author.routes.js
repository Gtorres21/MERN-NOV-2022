const AuthorController = require('../controllers/author.controller')


module.exports = (app) => {
    // FIND ALL ****************
    app.get('/api/author', AuthorController.findAll);
    // Find By ID **************
    app.get('/api/author/:id', AuthorController.findOne);
    // Create ******************
    app.post('/api/author', AuthorController.create);
    // Update ******************
    app.put('/api/author/:id', AuthorController.updateOne);
    // Delete ******************
    app.delete('/api/author/:id', AuthorController.delete);
}