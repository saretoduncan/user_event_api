import mongoose from "mongoose";
const eventSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  occurance: {
    type: String,
    required: true,
    enum: ["WEEKLY", "MONTHLY", "EARLY", "ONETIME"],
  },

  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
});
export const Event = mongoose.model("Events", eventSchema);
