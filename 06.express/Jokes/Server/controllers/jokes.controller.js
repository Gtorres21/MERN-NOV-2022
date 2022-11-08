const Joke = require('../models/jokes.model');

// console.log(Joke)

// ========= CRUD ==========

// Find All 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({ Jokes: allDaJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
    
// Find One
module.exports.findOneSingleJoke = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
    
// Create 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
    
// Update
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
    
// Delete
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}