const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 80;
const path = require('path')
const hbs = require('hbs')

const staticpath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../partials')

app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.static(staticpath))

hbs.registerPartials(partialsPath)

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/weather', (req, res)=>{
    res.render('weather')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, hostname, ()=>{
    console.log(`Listening at http://${hostname}:${port}`)
})