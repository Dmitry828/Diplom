import {Box, Container, Flex, Image} from '@chakra-ui/react';
import {EntrieTitle} from './EntrieTitle';
import {EntrieSubtitle} from './EntrieSubtitle';
import {EntrieInfo} from './EntrieInfo';
import {useSelector} from 'react-redux';
import {EntrieCasts} from './EntrieCasts';
import {EntrieDetails} from './EntrieDetails';
import noImage from '../../assets/no-image.png';
import {EntrieBackground} from './EntrieBackground';

export const Entrie = ({
  data: {
    backdrop_path,
    title,
    release_date,
    genres,
    runtime,
    poster_path,
    overview,
    vote_average,
    tagline,
    first_air_date,
    name,
    episode_run_time,
    original_title,
    original_name,
    original_language,
    budget,
    revenue,
    status,
    id,
  },
}) => {
  const entrieConfig = useSelector((state) => state.data.config);
  const entrieImageUrl = entrieConfig && entrieConfig.images.base_url;
  const entrieImageSize = entrieConfig && entrieConfig.images.backdrop_sizes[2];
  const entrieCredits = useSelector((state) => state.entrie.credits);
  const entrieCasts = entrieCredits.cast && entrieCredits.cast.filter((el, idx) => idx < 16);
  const entrieReleaseDate = first_air_date ? first_air_date : release_date;
  const entrieName = original_name ? original_name : original_title;
  const entrieTitle = name ? name : title;
  const entrieRunTime = episode_run_time ? episode_run_time[0] : runtime;
  const entrieOverview = overview ? overview : 'No description';
  const entrieRating = Number(vote_average).toFixed(1);


  return (
    <Box>
      <Box
        pos={'relative'}
        bg={
          backdrop_path &&
          `url(${entrieImageUrl}${entrieImageSize}/${backdrop_path}) right -200px top / cover no-repeat`
        }
        pl={{ base: '0', '2md': '56px' }}
        pt={{ base: '100px', '2md': '30px' }}
        pb={'30px'}
      >
        <EntrieBackground backdrop_path={backdrop_path} />
        <Flex justifyContent={'center'} px={'15px'}>
          <Flex
            flexDir={{ base: 'column', '3md': 'row' }}
            w={'100%'}
            maxW={'1400px'}
            justifyContent={'flex-start'}
            alignItems={{ base: 'center', '3md': 'flex-start' }}
            pos={'relative'}
            zIndex={'2'}
          >
            <Image
              mb={{ base: '15px', '3md': '0' }}
              borderRadius={'10px'}
              maxW={'none'}
              minW={'300px'}
              w={'300px'}
              h={'450px'}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
            />
            <Box w={'100%'} p={{ base: '0', '3md': '10px 0 10px 30px' }}>
              <EntrieTitle title={entrieTitle} release_date={entrieReleaseDate} />
              <EntrieSubtitle
                genres={genres}
                vote_average={entrieRating}
                releaseDate={entrieReleaseDate}
                entrieRunTime={entrieRunTime}
                entrieTitle={entrieTitle}
                id={id}
              />
              <EntrieInfo
                crew={entrieCredits.crew}
                entrieOverview={entrieOverview}
                tagline={tagline}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Container maxW={'1400px'} pl={{ base: '15px', '2md': '71px' }}>
        {entrieCasts && entrieCasts.length > 0 && (
          <EntrieCasts casts={entrieCasts} entrie={name ? 'tv' : 'movie'} />
        )}
        <EntrieDetails
          original_title={entrieName}
          original_language={original_language}
          budget={budget}
          revenue={revenue}
          status={status}
        />
      </Container>
    </Box>
  );
};
