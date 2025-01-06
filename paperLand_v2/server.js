const express = require('express')
const routes = require('./routes/routes.js')

const app = express()

app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/', routes.router)


app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Page non trouvée' });
  });

app.listen(3000, () => {
    console.log('Start server on port 3000')
})