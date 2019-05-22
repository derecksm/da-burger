const db = require('../config')

module.exports = {
    async getAll() {
        let response = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM burgers', (e, burgers) => {
                if (e) reject(e)
                console.log(burgers)
                resolve(burgers)
            })
        })
        return response
    },
    async getOne(name) {
        let response = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM burgers WHERE ?', { burger_name: name }, (e, burgers) => {
                if (e) reject(e)
                console.log(burgers)
                resolve(burgers)
            })
        })
        return response

    },
    async addOne(burger) {
        let response = await new Promise((resolve, reject) => {
            console.log(burger)
            db.query('INSERT INTO burgers SET ?', burger, e => {
                if (e) reject(e)
                console.log('Burger Added!')
                resolve()
            })
        })
        return response
    },

    async updateOne(id, updates) {
        let response = await new Promise((resolve, reject) => {
            db.query('UPDATE burgers SET ? WHERE ?', [updates, { item_id: id }], e => {
                if (e) reject(e)
                console.log('Burger Updated!')
                resolve()
            })
        })
        return response
    },

    async deleteOne(id) {
        let response = await new Promise((resolve, reject) => {
            db.query('DELETE FROM burgers WHERE ?', { item_id: id }, e => {
                if (e) reject(e)
                console.log('Burger Eaten')
                resolve()
            })
        })
        return response
    }
}