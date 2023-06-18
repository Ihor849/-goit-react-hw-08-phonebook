// import { Icon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  ButtonReg,
  Form,
  Label,
  Title,
  WrapperForm,
} from './RegisterPage.styled';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
      <Title className="titleRegister">Registration page</Title>

      <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>Name</Label>
        <InputGroup mb="10px" border-color='transparent'>
          <InputLeftElement pointerEvents="none">
            <Icon viewBox="0 0 32 32" fill=" #7fae07">
              <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
            </Icon>
          </InputLeftElement>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            size="md"
            placeholder="Enter name"
          ></Input>
          {/* {errors.name && toast.error(`${errors.name.message}`)} */}
        </InputGroup>
        <Label>Email</Label>
        <InputGroup mb="12px" border-color='transparent' color=" #7fae07;">
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
          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" background=" #7fae07" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        
        <ButtonReg type="submit">Register</ButtonReg>
      </Form>
    </WrapperForm>
  );
}
