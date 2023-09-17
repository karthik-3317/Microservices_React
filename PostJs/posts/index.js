import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {randomBytes} from 'crypto'

const app = express()

app.use(bodyParser.json())   // if json data want to be parse in server side use bodyparser.json() function todo

const posts = {}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex')  // this generates random id from crypto randomBytes function
    const {title} = req.body    

    posts[id] = {
        id,title
    }
    res.status(201).send(posts[id])
})


app.listen(1507,()=>{
    console.log('Sever Started On 1507')
})