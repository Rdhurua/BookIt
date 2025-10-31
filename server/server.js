import express from 'express';
import connectDB from './db/db.js';
import Experience from './models/Experience.js'
import Booking from './models/Booking.js';
import Promo from './models/Promo.js';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());

//all api calling


app.get("/api/experiences",async(req,res)=>{
     const experiences=await Experience.find();
     res.json(experiences) ;
})

//on viewdetails api

app.get("/api/experiences/:id",async(req,res)=>{
     const exp=await Experience.findById(req.params.id);
     if (!exp) return res.status(404).json({ message: "Experience not found" });
     res.json(exp);
});


// on booking the slots

app.post("/api/bookings",async(req,res)=>{
     const { experienceId, slotId, name, email, phone, promoCode } = req.body;

     
  const exp = await Experience.findById(experienceId);

    if (!exp) return res.status(404).json({ message: "Experience not found" });

    const slot = exp.slots.id(slotId);

    if (!slot || slot.isBooked)
    return res.status(400).json({ message: "Currently this slot not available" });

    slot.isBooked=true;

    await exp.save();

    let totalPrice=exp.price;
    let discount=0;

     if (promoCode) {
    const promo = await Promo.findOne({ code: promoCode.toUpperCase() });
    if (promo) {
      discount = (promo.discountPercent / 100) * exp.price;
      totalPrice = exp.price - discount;
    }
  }

  //the booking done here
   const booking = new Booking({
    experienceId,
    slotId,
    name,
    email,
    phone,
    promoCode,
    totalPrice,
  });

  await booking.save();

  res.json({success:true,bookingId:booking._id,totalPrice});


});



app.post("/api/promo/validate", async (req, res) => {
  const { code } = req.body;
  const promo = await Promo.findOne({ code: code.toUpperCase() });
  if (!promo)
    return res.json({ valid: false, message: "Invalid promo code" });
  res.json({ valid: true, discount: promo.discountPercent });
});



const PORT=process.env.PORT
app.listen(PORT,()=>{
    connectDB();
     console.log("listening to server "+PORT)
})