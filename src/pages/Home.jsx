import { Box, Heading, Highlight, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box maxW={1200}>
      <Heading color="green.400" textAlign="center" mt={20} mb={20}>
        Phonebook
      </Heading>
      <Text textAlign="center" fontSize={30}>
        <Highlight
          query="contacts"
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
        >
          Wellcome to the place your contacts live
        </Highlight>
      </Text>
    </Box>
  );
}
