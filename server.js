const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://mikeangelovelazquez:cinBMyBhXvIyIoE2@cluster0.wnzfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
  console.log('connected sucessfully')
}).catch((error) => {
  console.error("error", error);
})

const BookingSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  date: {type: Date, required: true},
  service: {type: String, required: true},
  stylist: {type: String, required: false},
});

const Booking = mongoose.model('Booking', BookingSchema)

app.get('/api/bookings', async (req, res) =>{
  try {
    const bookings = await Booking.find().sort({date: 1})
    res.json(bookings)
  } catch(error) {
    console.error('Error fetching bookings', error)
    res.status(500).json({message: 'Error fetching bookings'})
  }  
})

app.post('/api/bookings', async (req, res) =>{
  try {
    const {name, email, date, service, stylist} = req.body
const newBooking = new Booking({name, email, date, service, stylist})
await newBooking.save()
res.json(newBooking)
  } catch(error) {
    console.error('Error fetching bookings', error)
    res.status(500).json({message: 'Error fetching bookings'})

  }  
})

app.listen(5000, () =>{
  console.log('Server is running on port 5000')
})