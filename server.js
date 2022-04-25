const express= require('express')
const app= express()
const port = process.env.port || 5000
const path= require('path')
const router= require('./Router/index')

app.set('view engine','ejs')


/*
//express routing 
app.get('/',(req,resp)=>{
    resp.sendFile(path.resolve(__dirname)+'/home.html')
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.resolve(__dirname)+'/about.html')
})


//app.use(express.static('public')) 
*/

//ejs routing
/* 
// manual ejs routing
app.get('/',(req,res)=>{
    res.render('home',{
        title:'hello home page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'hello about page'
    })
})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'hello contact'
    })
})
*/

//express routing
app.use(router)


app.listen(port,()=>{
    console.log(`listening on port${port}`)
})