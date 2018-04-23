import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number,
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;
