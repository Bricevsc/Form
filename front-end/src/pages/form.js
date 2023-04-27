import React, { useState } from "react";
import { Form, Button, Content, Container } from "react-bulma-components";
import axios from "axios";

const FormContact = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = () => {
    axios({
      method: "post",
      url: `http://localhost:8000/form`,
      withCredentials: true,
      data: {
        lastname,
        firstname,
        email,
        phone,
        message,
        password,
      },
    });
  };

  const submit = () => {
    if (!email || !message) {
      alert("veuilez renseigné email et message");
    } else {
      sendForm();
    }
  };

  return (
    <Container className="fullsize" textAlign={"center"} style={{ width: "50%", padding: "5em" }}>
      <Form.Control >
        <Content renderAs="h1" textSize={3} >vos informations</Content>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="Nom"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="Prénom"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="email"
              placeholder="Adresse e-mail*"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="tel"
              pattern="[0-9]"
              placeholder="Téléphone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Textarea
              placeholder="Message*"
              className=" has-fixed-size"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="password"
              placeholder="mot de passe"
              className=" has-fixed-size"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Button onClick={submit}>
          📨
        </Button>
      </Form.Control>
    </Container>
  );
};
export default FormContact;
