import { EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { LogInFialure, logInSuccess } from 'utils/toasts';
import MySpinner from './MySpinner';
import { getAuthInProgress } from 'redux/selectors';


function LogInForm() {

    const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  const authInProgress = useSelector(getAuthInProgress)


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({email, password}))
    .unwrap().then(() => toast(logInSuccess)).catch(() =>
        toast(LogInFialure)
      );
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
      default:
        break;
    }
  };

  return (
    <Stack as='form' spacing={4} w={400} mr='auto' ml='auto' onSubmit={handleSubmit}>
        {authInProgress && <MySpinner/>}
      <Heading textAlign='center' color='green.400'>Log In</Heading>
      <InputGroup>
        <InputRightElement>
          <EmailIcon />
        </InputRightElement>
        <Input
          placeholder="Enter your email"
          pr="4.5rem"
          name="email"
          type="email"
          required
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
          name="password"
          required
          minLength={7}
          onChange={handleInputChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button type='submit' >Log in</Button>
      <Text textAlign='center'>Do not have an account?</Text>
      <Button borderColor="green.400"
        color="green.400"
        _hover={{
          background: 'green.400',
          color: 'white',
        }}
        variant="outline"
        onClick={() => navigate('/register')}>Register</Button>
    </Stack>
  )
}

export default LogInForm