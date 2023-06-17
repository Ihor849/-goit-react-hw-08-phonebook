
import { Button, ButtonReg, Form, Label, Title, WrapperForm } from 'pages/RegisterPage/RegisterPage.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';





export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    
    <WrapperForm>
      <Title>Страница логина</Title>

      <Form onSubmit={handleSubmit}
       autoComplete="on"
       >
        <Label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <ButtonReg type="submit">Войти</ButtonReg>
      </Form>
    </WrapperForm>
  );
}