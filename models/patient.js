import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
  name: String,
  doctorId: String,
  createdAt: Date,
  modified: Date,
  insurance: String
})






export default mongoose.model('patient', patientSchema)