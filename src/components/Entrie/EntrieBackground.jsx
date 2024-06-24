import {Box} from '@chakra-ui/react';

export const EntrieBackground = ({ backdrop_path }) => {
  return (
    <Box
      zIndex={'1'}
      bg={
        backdrop_path
          ? 'linear-gradient(to right, rgba(7.83%, 8.62%, 10.27%, 0.30) 150px, rgba(7.80%, 8.61%, 11.37%, 0.84) 100%)'
          : '#22252a'
      }
      w={'100%'}
      h={'100%'}
      pos={'absolute'}
      top={'0'}
      left={'0'}
    />
  );
};
