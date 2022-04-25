const router= require('express').Router()
const newapikey= require('../middlewares/apikey')


//router.use(newapikey) //global router middleware
router.get('/',(req,res)=>{
    res.render('home',{
        title:'hello home page'
    })
})

router.get('/about',(req,res)=>{
    res.render('about',{
        title:'hello about page'
    })
})
router.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'hello contact'
    })
})


router.get('/user/api',newapikey,(req,res)=>{   //single router middleware
    res.json([
        {
            name:'Mohammad Nazim Hossain',
            position:'software engineer'
        },
        {
            name:'Karim Uddin',
            position:'seniour developer'
        },
        {
            name:'Rahim Uddin',
            position:'software developer'
        }
    ])
})

module.exports= router