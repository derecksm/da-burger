const { burger } = require('../controllers')


module.exports = app => {

    // Get all the burgers in the database
    app.get('/burgers', (req, res) => {
        burger.getAll()
            .then(burgers => res.json(burgers))
            .catch(e => console.log(e))
    })

    //Select one burger in the database by name of the burger
    app.get('/burgers/:name', (req, res) => {
        burger.getOne(req.params.name)
            .then(burgers => res.json(burgers))
            .catch(e => console.log(e))
    })

    // Add a new burger to the database
    app.post('/burgers', (req, res) => {
        burger.addOne(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //Update an already existing burger in the database w/ id
    app.put('/burgers/:id', (req, res) => {
        burger.updateOne(req.params.id, req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //Delete a burger in the database w/ id
    app.delete('/burgers/:id', (req, res) => {
        burger.deleteOne(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}