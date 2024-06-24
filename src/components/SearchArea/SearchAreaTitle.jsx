import {Box} from '@chakra-ui/react';

export const SearchAreaTitle = ({ text }) => {
  return (
    <Box
      color={'rgba(29, 29, 29, 0.5);'}
      borderTop={'1px solid #ccc'}
      pt={'10px'}
      mt={'10px'}
      fontWeight={'400'}
      fontSize={'16px'}
      mb={'10px'}
    >
      {text}
    </Box>
  );
};
