import {Box, Button} from '@chakra-ui/react';
import {SortArea} from './SortArea/SortArea';
import {FilterArea} from './FilterArea/FilterArea';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../../features/modules/search/search.actions';

export const SearchArea = ({ card }) => {
  const dispatch = useDispatch();
  const searchSort = useSelector((state) => state.search.sort);
  const searchRelease = useSelector((state) => state.search.release);
  const searchGenres = useSelector((state) => state.search.genres);
  const searchCertification = useSelector((state) => state.search.certification);
  const searchIsChanging = useSelector((state) => state.search.changing);

  const handleSearchFunc = () => {
    window.scrollTo(0, 0);
    dispatch(
      searchRequest(card, 1, searchSort, searchRelease, searchGenres, searchCertification)
    );
  };

  return (
    <Box
      minW={{ base: '100%', '2md': '260px' }}
      w={{ base: '100%', '2md': '260px' }}
      color={'black'}
      mr={{ base: '0', '2md': '30px' }}
      mb={{ base: '50px', '2md': '0' }}
    >
      <SortArea />
      <FilterArea card={card} />
      <Button
        disabled={!searchIsChanging}
        onClick={handleSearchFunc}
        colorScheme={'blue'}
        w={'100%'}
      >
        Search
      </Button>
    </Box>
  );
};
