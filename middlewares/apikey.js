const apikey= (req,res,next)=>{
    const api='1234567'
    //console.log(req.query)
    const userapikey= req.query.apikey 
    if(userapikey&&(userapikey==api)){
        next()
    }else{
        res.json({
            message:'api not valid'
        })
    }
      
   
}
module.exports= apikey

///user/api?apikey=1234567
//?apikey=1234567