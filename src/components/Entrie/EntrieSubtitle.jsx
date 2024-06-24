import {useEffect, useState} from 'react';
import {Box, Flex, IconButton, Stack, useDisclosure, useToast,} from '@chakra-ui/react';
import {formatDate} from '../../core/formatDate';
import {obtGenres} from '../../core/obtGenres';
import {obtTime} from '../../core/obtTime';
import {RatedCircle} from '../../common/RatedCircle';
import {PlayIcon} from '../../theme/icons/PlayIcon';
import {EntrieModal} from './EntrieModal';
import {useDispatch, useSelector} from 'react-redux';
import {StarIcon} from '@chakra-ui/icons';
import {obtContentRating} from '../../core/obtContentRating';
import {addToFavourite, removeFromFavourite,} from '../../features/modules/favourite/favourite.actions';
import {addToFavouritePopup} from "../../core/addToFavouritePopup";


export const EntrieSubtitle = ({
  genres,
  vote_average,
  releaseDate,
  entrieRunTime,
  entrieTitle,
  id,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [trailer, setTrailer] = useState({});
  const entrieFavouriteList = useSelector((state) => state.favourite.favouriteList);
  const isFavourite =
    entrieFavouriteList && entrieFavouriteList.findIndex((movie) => movie.id === id) !== -1;
  const entrie = useSelector((state) => state.entrie.entrie);
  const entrieVideos = useSelector((state) => state.entrie.videos);
  const entrieButtonOption = !isFavourite ? 'circle' : 'circleActive';
  const entrieContentRating = useSelector(
    (state) => state.entrie.content_rating.results
  );

  useEffect(() => {
    if (entrieVideos.id) {
      const finalTrailer = entrieVideos.results.filter(
        (el) => el.name.split(' ')[1] === 'Trailer'
      )[0];
      setTrailer(finalTrailer);
    }
  }, [entrieVideos]);

  const handleFavouriteFunc = () => {
    if (!isFavourite) {
      dispatch(addToFavourite(entrie));
    } else {
      dispatch(removeFromFavourite(id));
    }

    addToFavouritePopup(entrieTitle, isFavourite, toast);
  };

  return (
    <>
      <Stack
        mb={'10px'}
        direction={'row'}
        spacing={'15px'}
        fontWeight={'400'}
        fontSize={'14px'}
        align={'center'}
        flexWrap={'wrap'}
        justifyContent={{ base: 'center', '3md': 'flex-start' }}
      >
        {obtContentRating(entrieContentRating, 'US') && (
          <Box opacity={'0.6'} p={'3px'} border={'1px solid white'}>
            {obtContentRating(entrieContentRating, 'US')}
          </Box>
        )}
        {formatDate(releaseDate) && <Box>{formatDate(releaseDate)}</Box>}
        {obtGenres(genres) && <Box>{obtGenres(genres)}</Box>}
        {entrieRunTime && <Box>{obtTime(entrieRunTime)}</Box>}
      </Stack>
      <Flex
        mb={'50px'}
        justifyContent={{
          base: 'flex-start',
          sm: 'center',
          '3md': 'flex-start',
        }}
      >
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={'15px'}
          alignItems={{ base: 'flex-start', sm: 'center' }}
        >
          <Flex alignItems={'center'} pr={'10px'}>
            <RatedCircle
              value={vote_average}
              size={{ base: '50px', sm: '70px' }}
            />
            <Box ml={'10px'}>User score</Box>
          </Flex>
          <IconButton
            onClick={handleFavouriteFunc}
            variant={entrieButtonOption}
            aria-label="Add to favourite"
            icon={<StarIcon />}
          />
          {trailer && (
            <Flex
              as={'button'}
              onClick={onOpen}
              alignItems={'center'}
              _hover={{ opacity: '0.6' }}
            >
              <Box mr={'10px'}>Watch trailer</Box>
              <PlayIcon color={'#fff'} />
            </Flex>
          )}
        </Stack>
      </Flex>
      {trailer && (
        <EntrieModal trailer={trailer} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};
