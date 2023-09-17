import express from 'express'
import bodyparser from 'body-parser'
import {randomBytes} from 'crypto'
const app = express()

app.use(bodyparser.json())

const commentsByPostId = {}

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || [])
})


app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id]  || []  // this is to check that post id is already commented if gives the array or undefined if it is undefined returing empty array

    comments.push({id:commentId,content})

    commentsByPostId[req.params.id] = comments

    res.status(201).send(comments)
})




app.listen(1508,()=>{
    console.log('listening on 1508')
})
