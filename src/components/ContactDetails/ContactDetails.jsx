import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Box,Flex,IconButton, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
// import { Button } from 'utils/Utils.styled';

export default function ContactDetails({contact}) {
  const dispatch = useDispatch()

    return (
        <Flex justifyContent='space-between' alignItems='center' width={400}>
          <Box>
            <Text fontWeight={500}>{contact.name}</Text>
            <Text>{contact.number}</Text>
          </Box>
            
            <IconButton
            size='sm'
            as='button'
            variant='solid'
            colorScheme='green'
            aria-label='Delete icon'
            icon={<DeleteIcon />}
            type="button" 
            onClick={() => dispatch(deleteContact(contact.id))}
/>
            
          </Flex>
    )
}