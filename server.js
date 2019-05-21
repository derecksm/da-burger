const express = require('express')
const { join } = require('path')
const app = express()

//connects the html to the server
app.use(express.static(join(__dirname, 'public')))
//handles multinested javascript
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)

require('./config').connect(_ => { app.listen(3000) })
