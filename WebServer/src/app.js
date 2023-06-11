const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

// console.log(path.join(__dirname)) // current dir
// console.log(path.join(__dirname, '../..')) // get back two steps
// console.log()

// the old way
// app.get('', (req, res)=>{
//     res.send('<h1>Express</h1>')
// })

// the new way
app.get('', (req,res)=>{
    res.render('index',{
        title : "WeatherCast",
        description: "A forecast app"
    })
})

app.get('/help', (req, res)=>{
    // res.send('help is coming')
    res.render('help',{
        title : "WeatherCast",
        message : "Need Help? Contact us"
    })
})

app.get('/about', (req, res)=>{
    // res.send('<h1>About Page</h1>')
    res.render('about', {
        name : "Raiyan"
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        location : "Philadelphia",
        forecast  : "gg"
    })
})

app.listen(3000, ()=>{ 
    console.log('server is up on port 3000')
})