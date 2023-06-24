import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/selectors';
import {
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { Icon, PhoneIcon } from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';
import { addContactFailure, addContactSuccess } from 'utils/toasts';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const toast = useToast();
  const { items } = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const isInPhoneBook = (name, contacts) => {
    return contacts.find(contact => contact.name === name) ? true : false;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (items.length && isInPhoneBook(name, items)) {
      alert(name + ' is already in contacts.');
    } else {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then(() =>
          toast(addContactSuccess)
        )
        .catch(() =>
          toast(addContactFailure)
        );
    }
    setName('');
    setNumber('');
    e.currentTarget.reset();
  };

  return (
    <Stack as="form" spacing={3} w={400} mb={10} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <InputGroup>
          <InputRightElement pointerEvents="none">
            <Icon as={BsFillPersonFill}/>
          </InputRightElement>
          <Input
            focusBorderColor="green.400"
            shadow="md"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </InputGroup>
      </label>
      <label>
        <p>Number</p>
        <InputGroup mb={10}>
          <InputRightElement pointerEvents="none">
            <PhoneIcon color="green.400" />
          </InputRightElement>
          <Input
            focusBorderColor="green.400"
            shadow="md"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </InputGroup>
      </label>
      <Button
        bg="green.400"
        color="white"
        _hover={{
          background: 'green.200',
          color: 'white',
        }}
        variant="outline"
        type="submit"
      >
        Add contact
      </Button>
    </Stack>
  );
}
