
const mongoose = require('mongoose');

const ProductModel = require('./product.model');

const UserModel = require('./user.model');



const orderSchema = mongoose.Schema({


    UserID :{
        
        type:mongoose.Schema.Types.ObjectId,
        
        ref:UserModel
    },

    Products:[
        
        {
            Product:{
                
                type:mongoose.Schema.Types.ObjectId,
                
                ref:ProductModel
            
            },

            Quantity:{type:Number},
            
            Address: {type:String , required:true},

            Status:{type:String , required:true , enum:["Confirmed","Cancelled","Delivered"]}

        } 
    
    ],


},

    {
        versionKey:false,
        timestamps :true
    
    }
)


const OrderModel = mongoose.model("order",orderSchema)

module.exports = OrderModel;
