import {Box, Button, Heading, Stack, Text} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {setRating} from '../../core/setRating';
import {formatOverview} from '../../core/formatOverview';
import {GenreInfo} from '../../common/GenreInfo';
import {Link} from 'react-router-dom';

export const IntroSliderItem = ({
  movie: { title, overview, genre_ids, vote_average, backdrop_path, id },
}) => {
  const sliderGenres = useSelector((state) => state.data.genresMovies);
  const sliderConfig = useSelector((state) => state.data.config);
  const sliderImageUrl = sliderConfig && sliderConfig.images.base_url;
  const sliderImageSize = sliderConfig && sliderConfig.images.backdrop_sizes[2];

  return (
    <Box
      bg={`url(${sliderImageUrl}${sliderImageSize}${backdrop_path}) center top / cover no-repeat`}
      minH={{ base: '100vh', md: '800px', '3xl': '60vh' }}
      position={'relative'}
    >
      <Box
        zIndex={'1'}
        pos={'absolute'}
        w={'100%'}
        h={'100%'}
        background={
          'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)'
        }
      />
      <Box
        zIndex={'2'}
        maxW={'620px'}
        position={'absolute'}
        top={{ base: '110px', lg: '168px' }}
        left={{ base: '30px', '2md': '75px', lg: '190px' }}
      >
        <Stack
          alignItems={'flex-start'}
          spacing={'16px'}
          pb={{ base: '56px', '3xl': '90px' }}
          pr={{ base: '20px', lg: '0' }}
          position={'relative'}
          minH={'416px'}
        >
          <GenreInfo genres={sliderGenres} genre_ids={genre_ids} />
          <Box>{setRating(vote_average)}</Box>
          <Heading
            fontSize={{ base: '24px', md: '36px', lg: '56px', '3xl': '75px' }}
            lineHeight={{ base: '1.5', lg: '64px', '3xl': '1.5' }}
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: '16px', '3xl': '24px' }}
            lineHeight={'32px'}
            fontWeight={'400'}
          >
            {formatOverview(overview)}
          </Text>
          <Link to={`/movie/${id}`}>
            <Button
              position={'absolute'}
              left={'0'}
              bottom={'0'}
              w={{ base: '150px', lg: '200px' }}
              h={{ base: '56px' }}
              fontSize={'16px'}
              fontWeight={'400'}
              border={'1px solid rgba(225, 8, 86, 0.5);'}
              boxShadow={'0px 16px 16px 4px rgba(0, 0, 0, 0.12)'}
              borderRadius={'40px'}
              transition={'all .3s ease-in-out'}
              bg={'rgba(245, 101, 101, 0.5)'}
              _hover={{ background: 'red.300' }}
              zIndex={15}
            >
              Watch now
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};
