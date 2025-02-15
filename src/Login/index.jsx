import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Error, Form, Input } from './main';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    const formData = new FormData();
    formData.append("phone_number", phone);
    formData.append("password", password);

    axios({
      url: 'https://realauto.limsa.uz/api/auth/signin',
      method: 'POST',
      data: formData,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err, "error");
    });
  };

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.username === "admin" && formData.password === "123456") {
  //     alert("Login muvaffaqiyatli!");
  //   } else {
  //     setError("Noto‘g‘ri login yoki parol!");
  //   }
  // };

  return (
    <Container>
      <Form >
        <h2>Login</h2>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          // value={formData.username}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          // value={formData.password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Error>{error}</Error>}
        <Button type="submit" onClick={Login}>Login</Button>
      </Form>
    </Container>
  );
};
