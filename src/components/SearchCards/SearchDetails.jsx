import {Box, Flex, Heading, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const SearchDetails = ({ card }) => {
  const totalMovies = useSelector((state) => state.oneSearch.searchMovies);
  const totalSerials = useSelector((state) => state.oneSearch.searchSerials);

  return (
    <Box
      minW={{ base: '100%', '2md': '260px' }}
      w={{ base: '100%', '2md': '260px' }}
      color={'black'}
      mr={{ base: '0', '2md': '30px' }}
      mb={{ base: '50px', '2md': '0' }}
      h={'100%'}
      bg={'white'}
      borderRadius={'10px'}
      overflow={'hidden'}
    >
      <Box color={'white'} p={'20px'} bg={'blue.500'}>
        <Heading fontSize={'20px'}>Search results</Heading>
      </Box>
      <VStack alignItems={'flex-start'} py={'10px'} spacing={'0'}>
        <Flex
          bg={card === 'movie' ? 'gray.300' : 'white'}
          _hover={{ background: 'gray.300' }}
          w={'100%'}
          p={'10px 20px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box fontSize={'16px'}>
            {card === 'movie' ? (
              <Box cursor={'pointer'}>Movies</Box>
            ) : (
              <Link to={'/search/movie'}>Movies</Link>
            )}
          </Box>
          <Box
            fontSize={'14px'}
            fontWeight={'400'}
            borderRadius={'10px'}
            p={'5px 8px'}
            bg={'gray.200'}
          >
            {totalMovies.total_results}
          </Box>
        </Flex>
        <Flex
          bg={card === 'tv' ? 'gray.300' : 'white'}
          _hover={{ background: 'gray.300' }}
          w={'100%'}
          p={'10px 20px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box fontSize={'16px'}>
            {card === 'tv' ? (
              <Box cursor={'pointer'}>TV Shows</Box>
            ) : (
              <Link to={'/search/tv'}>TV Shows</Link>
            )}
          </Box>
          <Box
            fontSize={'14px'}
            fontWeight={'400'}
            borderRadius={'10px'}
            p={'5px 8px'}
            bg={'gray.200'}
          >
            {totalSerials.total_results}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};
