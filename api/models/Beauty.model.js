import mongoose from 'mongoose';


const BeautySchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  Des: {
    type: String,
    required: true
  }
});


const Beauty = mongoose.model('Beauty', BeautySchema);

export default  Beauty;