const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors());

const port = process.env.port || 5000;

const teaData = require('./Data/tea.json')

app.get('/', (req, res)=>{
    res.send('Tea server is running')
})

app.get('/tea', (req,res)=>{
    res.send(teaData);
})

app.get('/tea/:id',(req,res)=>{
    const id = req.params.id;
    const singleTea  = teaData.find(t => t._id == id);
    res.send(singleTea);
})

app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const teaCategory = teaData.filter(c=> c.category_id == id);
    res.send(teaCategory);
})

app.listen(port, ()=>{
    console.log('server is running on', port)
})