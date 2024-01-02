import mongoose from "mongoose";

const resouceSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  description: { type: String, required: true, min: 3 },
  category: { type: String, required: true, min: 3 },
  content_link: { type: String, required: true, min: 3 },
});

export default mongoose.model("Resource", resouceSchema);
