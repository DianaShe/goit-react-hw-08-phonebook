import { EmailIcon, Icon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { BsFillPersonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { registerFialure, registerSuccess } from 'utils/toasts';
import { getAuthInProgress } from 'redux/selectors';
import MySpinner from './MySpinner';

function RegisterForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const authInProgress = useSelector(getAuthInProgress)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }))
      .unwrap()
      .then(() => toast(registerSuccess))
      .catch(() => toast(registerFialure));
    setName('');
    setEmail('');
    setPassword('');
    e.currentTarget.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  return (
    <Stack
      as="form"
      spacing={4}
      w={400}
      mr="auto"
      ml="auto"
      onSubmit={handleSubmit}
    >
      {authInProgress && <MySpinner/>}
      <Heading textAlign="center" color="green.400">
        Register
      </Heading>
      <InputGroup>
        <InputRightElement>
          <Icon as={BsFillPersonFill} />
        </InputRightElement>
        <Input
          placeholder="Enter your name"
          pr="4.5rem"
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <InputRightElement>
          <EmailIcon />
        </InputRightElement>
        <Input
          placeholder="Enter your email"
          pr="4.5rem"
          name="email"
          type="email"
          title="Email should contain @. For example, example@mail.com"
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
          name="password"
          minLength={7}
          onChange={handleInputChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button type="submit">Register now</Button>
      <Text textAlign="center">Already have an account?</Text>
      <Button
        borderColor="green.400"
        color="green.400"
        _hover={{
          background: 'green.400',
          color: 'white',
        }}
        variant="outline"
        onClick={() => navigate('/login')}
      >
        Log In
      </Button>
    </Stack>
  );
}

export default RegisterForm;
