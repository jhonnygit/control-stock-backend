const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const path=require('path')
require('dotenv').config()

const app=express()

app.use(cors())

const PORT=process.env.PORT

mongoose
    .connect(
        `mongodb+srv://jhonlook007:${process.env.MONGO_DB_PASS}@development.ylu9mau.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((result)=>{
        app.listen(PORT,() => {
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        })
        console.log('Conexion exitosa a la BBDD')
    })
    .catch((err)=>console.log(err)) 

const productSchema=mongoose.Schema(
    {
       name:{type:'String',require:true},
       price:{ type : 'Number'}
    },
    {timestamps:true}
)

const Product=mongoose.model('Product',productSchema)

    
app.use(express.json())

app.post('/api/v1/products',(req,res) => {

    if(!req.body.name){
        res.status(400).json({
            ok:false,
            message:"El campo Nombre es obligatorio"
        })
        return
    }


    const newProduct=new Product(req.body)
    newProduct
    .save()
    .then((result)=>{
        res.status(201).json({ok:true})
    })
    .catch((err)=>console.log(err))     
})

app.use(express.static(path.join(__dirname,'public')))




