const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  StatsNumber:{
    type: String,
    required: true,
    trim: true,
  },
});

// Create a model from the schema
const StatsModel =
  mongoose.models.StatsModel || mongoose.model("StatsModel", StatsSchema);
// Export the model
export default BlogModel;
