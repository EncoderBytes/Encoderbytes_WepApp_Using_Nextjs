const mongoose = require("mongoose");

const WeProvideSchema = new mongoose.Schema({
  OrderNumber:{
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  sub_title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
    publicId: {
    type: String,
    // required: true,
  },
});

// Create a model from the schema
const WeProvideModel =
  mongoose.models.WeProvideModel || mongoose.model("WeProvideModel", WeProvideSchema);
// Export the model
export default WeProvideModel;
