import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Flex, Grid, Heading } from '@chakra-ui/react';

function Contacts() {
  return (
    <Grid justifyItems='center'>
      <Flex justifyContent='center' flexWrap='wrap' gap={10}>
        <ContactForm />
        <Filter />
      </Flex>
        <Heading size='lg' color='black' mb={6}>Contacts</Heading>
        <ContactList />
    
    </Grid>
    
  )
}

export default Contacts