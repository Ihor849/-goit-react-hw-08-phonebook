import Container from 'components/Container/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { ButtonReg, Form, Label,Title, WrapperForm } from './RegisterPage.styled';





export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    
    <WrapperForm className="containerRegister">
      <Title  className="titleRegister">Страница регистрации</Title>

      <Form onSubmit={handleSubmit} 
       autoComplete="on"
       >
        <Label>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label >
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            
          />
        </Label>

        <Label >
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <ButtonReg type="submit">Зарегистрироваться</ButtonReg>
      </Form>
    </WrapperForm>
  );
}