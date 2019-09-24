require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')
const socket = require('socket.io')

// Controllers
const authCtrl = require('./controllers/authController')
const ctrl = require('./controllers/controller')
const favCtrl = require('./controllers/favController')
const teamsCtrl = require('./controllers/teamsController')
const mailCtrl = require('./controllers/mailController')

// env Variables
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env

// App Instance
const app = express()
    io = socket(
        // App Listening
        app.listen(SERVER_PORT, () => {
            console.log('Server is Running! 🏈')
        })
    )

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

app.get('/api/allFavorites/:userID', favCtrl.getFavorites)
app.post('/api/addFavorites', favCtrl.addFavorites)
app.delete('/api/deleteFavorites/:id', favCtrl.deleteFavorites)

app.get('/api/allTeams', teamsCtrl.getTeams)

app.post('/api/mail', mailCtrl.mail)

io.on('connection', socket => {
    console.log('User Connected')

    socket.on('join room', async data => {
        const {room} = data
        const db = app.get('db')
        console.log('Room Joined')
        let existingRoom = await db.chat.check_chat_room({id: room})
        !existingRoom.length ? db.chat.create_chat_rooms({id: room}) : null
        let messages = await db.messages.chat_messages_history({id: room})
        socket.join(room)
        io.to(room).emit('room joined', messages)
    })
    socket.on('message sent', async data => {
        const {room, message} = data
        const db = app.get('db')
        await db.messages.create_chat_messages({id: room, message})
        let messages = await db.messages.chat_messages_history({id: room})
        io.to(data.room).emit('message dispatched', messages)
    })
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })    
})