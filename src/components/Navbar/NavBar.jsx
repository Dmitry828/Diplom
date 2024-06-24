import {Box, Image, Stack} from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import home from '../../assets/home.svg';
import movies from '../../assets/movies.svg';
import serials from '../../assets/serials.svg';
import star from '../../assets/star.svg';
import search from '../../assets/search.svg';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <Box
      overflow={'hidden'}
      zIndex={{ base: '11', '2md': '9' }}
      top={'0'}
      left={'0'}
      position={{ base: 'fixed', '2md': 'absolute' }}
      w={{ base: '100%', '2md': '55px' }}
      h={{ base: 'auto', '2md': '100%' }}
      minH={{ base: '56px', '2md': '100vh' }}
      backdropFilter={'blur(24px)'}
      background={'rgba(29, 29, 29, 0.5)'}
      boxShadow={'0px 40px 40px 8px rgba(0, 0, 0, 0.17)'}
    >
      <Stack
        justifyContent={{ base: 'space-between', '2md': 'flex-start' }}
        direction={{ base: 'row', '2md': 'column' }}
        alignItems={'center'}
        p={{ base: '10px 20px', '2md': '40px 0' }}
        spacing={{ base: '0', '2md': '90px' }}
      >
        <Box px={'5px'}>
          <Image w={{base: '45px', sm: '100%'}} src={logo} />
        </Box>
        <Box p={'8px'}>
          <Link to={'/'}>
            <Image src={home} />
          </Link>
        </Box>
        <Box p={'8px'}>
          <Link to={'/search/movie'}>
            <Image src={search} />
          </Link>
        </Box>
        <Box p={'8px'}>
          <Link to={'/movie'}>
            <Image src={movies} />
          </Link>
        </Box>
        <Box p={'8px'}>
          <Link to={'/tv'}>
            <Image src={serials} />
          </Link>
        </Box>
        <Box p={'8px'}>
          <Link to={'/favourite'}>
            <Image src={star} />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
