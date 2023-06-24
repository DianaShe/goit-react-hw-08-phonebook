import { Input, InputRightElement, InputGroup, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { SearchIcon } from '@chakra-ui/icons';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

  return (
    <Box >
      <p>Find contacts by name</p>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="green.400" />
        </InputRightElement>
        <Input
          focusBorderColor="green.400"
          shadow="md"
          w={400}
          mb={20}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          onBlur={() => dispatch(setFilter(''))}
        />
      </InputGroup>
    </Box>
  );
}
