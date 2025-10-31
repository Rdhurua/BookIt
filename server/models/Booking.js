import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
     experienceId:{type:mongoose.Schema.Types.ObjectId,ref:"Experience"},
     slotId:{type:mongoose.Schema.Types.ObjectId},
  name: String,
  email: String,
  totalPrice: Number,
  promoCode: String,
});

const Booking=mongoose.model("Bookings",bookingSchema);

export default Booking;