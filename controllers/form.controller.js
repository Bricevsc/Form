import { FormModel } from '../models/form.model.js'

export default async function sendDataForm (req, res) {
  const { lastname, firstname, email, phone, message } = req.body;

  try {
    const form = await FormModel.create({
      lastname,
      firstname,
      email,
      phone,
      message,
    });
    res.status(201).json({ form: form._id }); // 201 Created + revoi id
  } catch (err) {
    res.status(200).send({ err });
  }
};
