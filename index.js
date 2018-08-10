const express=require('express')
const mongoose=require('mongoose')
const bodyParse=require('body-parser')
const session=require('express-session')
const cors=require('cors')
const dbConfig=require('./config/database')
const CampusRoutes=require('./routes/CampusRoutes')
const app=express()

mongoose.connect(dbConfig.url)
mongoose.Promise = global.Promise

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
// })


app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.use(
    cors({
        origin: [
        '*'
        ],
        methods: ['GET', 'HEAD', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTION'],
        credentials: true
    })
)

app.use(
    session({
        secret:'impactbyte0107',
        saveUninitialized: true,
        resave: true,
        cookie: {maxAge: 30*24*60*60*1000}
    })
)

CampusRoutes(app)

app.listen(8080)
console.log('Listen on port 8080');
