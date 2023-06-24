import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVisibleContacts, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactDetails from '../ContactDetails/ContactDetails'
import { Stack } from '@chakra-ui/react';
import MySpinner from 'components/MySpinner';

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Stack spacing={4}>
      {isLoading && !error && <MySpinner/>}
      {error && <p>{error}</p>}
      {visibleContacts.length > 0 &&
        visibleContacts.map((contact) => (
          <ContactDetails key={contact.id} contact={contact} />
        ))}
    </Stack>
  );
}