import mongoose from 'mongoose'

const promoSchema=new mongoose.Schema({
     code:String,
     discountPercent:Number,
});

const Promo=mongoose.model("Promo",promoSchema);
export default Promo;