const mongoose=require('mongoose')

const productSchema=mongoose.Schema(
    {
       name:{type:'String',require:true},
       price:{ type : 'Number'}
    },
    {timestamps:true}
)

const Product=mongoose.model('Product',productSchema)

module.exports=Product