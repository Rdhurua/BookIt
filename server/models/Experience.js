import mongoose from 'mongoose'

const slotSchema=new mongoose.Schema({
  date: String,
  time: String,
  isBooked: { type: Boolean, default: false },
});

const experienceSchema=new mongoose.Schema({
 picture: String,
  place: String,
  location: String,
  desc: String,
  price: Number,
  slots: [slotSchema],
});

const Experience=mongoose.model("Experience",experienceSchema);

export default Experience;