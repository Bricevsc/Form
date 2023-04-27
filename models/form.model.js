import { Schema, model } from "mongoose";
import isEmail from "validator/lib/isemail.js";
import bcrypt from 'bcrypt';

const FormSchema = new Schema({
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
    validate: [isEmail],
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
  password: {
    type: String,
    required: false,
    max: 1024,
    minlength: 4,
  },
});

FormSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const collectionName = 'contact';

export const FormModel = model ("Form", FormSchema, collectionName)

