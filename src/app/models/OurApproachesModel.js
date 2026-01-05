const mongoose = require("mongoose");

const OurApproahcesSchema = new mongoose.Schema({
  OrderNumber: {
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
const OurApproahcesModel =
  mongoose.models.OurApproahcesModel ||
  mongoose.model("OurApproahcesModel", OurApproahcesSchema);
// Export the model
export default OurApproahcesModel;
