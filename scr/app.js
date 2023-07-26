const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const path = require('path')

const projects = path.join(__dirname ,'../projects'   )

app.use ( express.static (projects) )

app.set("view engine","hbs");

const viewsDirectiony=path.join(__dirname,"../temp1/views")

app.set("views",viewsDirectiony)


var hbs =require('hbs')

const partialsDirectiony=path.join(__dirname,"../temp1/partials")

hbs.registerPartials(partialsDirectiony)




app.get('/',(req,res)=>{
    res.render('index', {
        title: "Home",
        desc: "HOME PAGE"
    
    
    }           
    )

})





app.get('/weather',(req,res)=>{
    res.render('weather',{
        title: "weather",
        desc:" weather PAGE"


    })



})





app.listen(port , ()=>{

    console.log(`done lisiting on port ${port}`)

})




// app.get('/' ,(req,res)=>{

// res.send ( 'hello world '  )

// })


// app.get('/team' ,(req,res)=>{

//     res.send ( 'team media '  )
    
//     })
// app.get('/ser' ,(req,res)=>{

//     res.send ( 'services'  )
        
//     })



















