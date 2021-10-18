const express = require('express')
const ejs = require('ejs')

const mongoose =require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db')

const Post=require('./models/Post')
const port = 3000

app.use(express.static('puplic'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs")
app.get('/',async (req, res) => {
  const posts=await Post.find({})
  
  res.render('index',{posts})
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/add_post', (req, res) => {
  res.render('add_post')
})
app.get('/posts/:id',async (req, res) => {
  const posts=await Post.findById(req.params.id)
  res.render('post',{posts})

})

app.post('/post',async(req,res)=>{
  await Post.create(req.body)
  res.redirect('/')
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

