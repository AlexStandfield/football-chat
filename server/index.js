require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')

// Controllers
const authCtrl = require('./controllers/authController')
const ctrl = require('./controllers/controller')
const favCtrl = require('./controllers/favController')
const teamsCtrl = require('./controllers/teamsController')

// env Variables
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env

// App Instance
const app = express()

// TLM
app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000
    }
}))

// Database Connection
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Database is Connected 🚀')
    })
    .catch(err => {
        console.log(err)
        console.log('yellow') 
    })

// Endpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.get('/api/auth/logout', authCtrl.logout)
app.put('/api/update/:id', authCtrl.update)
app.delete('/api/deleteUser/:id', authCtrl.delete)

app.get('/api/allPosts', ctrl.getPosts)
app.post('/api/addPosts', ctrl.addPosts)
app.delete('/api/deletePost/:id', ctrl.deletePosts)
app.put('/api/updatePost/:id', ctrl.updatePosts)

app.get('/api/allFavorites/:id', favCtrl.getFavorites)
app.post('/api/addFavorites', favCtrl.addFavorites)
app.delete('/api/deleteFavorites/:id', favCtrl.deleteFavorites)

app.get('/api/allTeams', teamsCtrl.getTeams)

// App Listening
app.listen(SERVER_PORT, () => {
    console.log('Server is Running! 🏈')
})