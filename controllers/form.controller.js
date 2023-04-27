import { FormModel } from "../models/form.model.js";

export default async function sendDataForm(req, res) {
  const { lastname, firstname, email, phone, message, password } = req.body;

  try {
    const form = await FormModel.create({
      lastname,
      firstname,
      email,
      phone,
      message,
      password,
    });
    res.status(201).json({ form: form._id }); // 201 Created + revoi id
  } catch (err) {
    res.status(400).send({ err }); // 400 bas request
  }
}
