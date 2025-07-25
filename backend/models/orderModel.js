import mongooes from "mongoose"

const orderSchema = new mongooes.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = mongooes.models.order || mongooes.model("order",orderSchema);

export default orderModel;