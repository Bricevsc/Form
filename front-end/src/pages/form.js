import React, { useState } from "react";
import { Form, Button } from "react-bulma-components";

const FormContact = () => {
  return (
    <Form.Control>
      <Form.Field>
        <Form.Label>Nom</Form.Label>
        <Form.Control>
          <Form.Input
            type="text"
            placeholder="Nom"
            name="lastname"
            value={lastname}
            onChange={(e) => ({ lastname: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Prénom</Form.Label>
        <Form.Control>
          <Form.Input
            type="text"
            placeholder="Prénom"
            name="firstname"
            value={firstname}
            onChange={(e) => ({ firstname: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>email</Form.Label>
        <Form.Control>
          <Form.Input
            type="email"
            placeholder="Adresse e-mail*"
            name="email"
            value={email}
            onChange={(e) => ({ email: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>tel</Form.Label>
        <Form.Control>
          <Form.Input
            type="tel"
            pattern="[0-9]"
            placeholder="Téléphone"
            name="phone"
            value={phone}
            onChange={(e) => ({ phone: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <Form.Textarea
            placeholder="Message*"
            className=" has-fixed-size"
            name="message"
            value={message}
            onChange={(e) => ({ message: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            type="password"
            placeholder="mot de passe"
            className=" has-fixed-size"
            name="password"
            value={password}
            onChange={(e) => ({ password: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
      <Button color="primary" disabled={!isFormValid} onClick={submit}>
        📨
      </Button>
    </Form.Control>
  );
};
export default FormContact;
