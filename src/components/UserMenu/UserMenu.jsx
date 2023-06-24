import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getAuthToken, getUserMail } from 'redux/selectors';

export const UserMenu = () => {
  const userEmail = useSelector(getUserMail);
  const dispath = useDispatch()
  const toast = useToast()
  const token = useSelector(getAuthToken)

  const handleClick = () => {
    dispath(logOut(token)).unwrap().then(()=> toast({
      title: 'You logged out',
      description: "Now you need to log in to see your contacts",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top'
    }))
  }
  return (
    <Flex gap={10} alignItems="baseline" color='white'>
      <Text fontWeight={500}>{userEmail}</Text>
      <Button
        borderColor="green.400"
        color="green.400"
        _hover={{
          background: 'green.400',
          color: 'white',
        }}
        variant="outline"
        onClick={handleClick}
      >
        LogOut
      </Button>
    </Flex>
  );
};
