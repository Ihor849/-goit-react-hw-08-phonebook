

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  ButtonReg,
  Form,
  Label,
  Title,
  WrapperForm,
} from '../RegisterPage/RegisterPage.styled';
import {
  Button,
  
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';





export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
    <WrapperForm className="containerRegister">
      <Title className="titleRegister">Login page</Title>

      <Form onSubmit={handleSubmit} autoComplete="on">
      
        <Label>Email</Label>
        <InputGroup mb="12px" border-color='transparent' color=" #7fae07">
          <InputLeftElement pointerEvents="none">
            <EmailIcon />
          </InputLeftElement>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            size="md"
            placeholder="Enter email"
          />
        </InputGroup>
        <Label>Password</Label>
        <InputGroup mb="12px" border-color='transparent' color=" #7fae07">
          <InputLeftElement pointerEvents="none">
            <LockIcon />
          </InputLeftElement>
          <Input
            type={show ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            size="md"
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" background=" #7fae07" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <ButtonReg type="submit">Login</ButtonReg>
      </Form>
    </WrapperForm>
  );
}