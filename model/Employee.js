import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  department: {
    type: String,
  },
  status: {
    type: String,
  },
});

export default mongoose.model("Employee", EmployeeSchema);
