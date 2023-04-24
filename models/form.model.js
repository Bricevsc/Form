import { Schema, model } from "mongoose";

const formSchema = new Schema({
  lastname: {
    type: String,
    required: false,
    minLength: 3,
    maxLength: 55,
    unique: false,
    trim: true,
  },
  firstname: {
    type: String,
    required: false,
    minLength: 3,
    maxLength: 55,
    unique: false,
    trim: true,
  },
  phone:{
    type: String,
    required: false,
    minLength: 10,
    maxLength: 10,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
});

export const FormModel = model ("form", formSchema)

