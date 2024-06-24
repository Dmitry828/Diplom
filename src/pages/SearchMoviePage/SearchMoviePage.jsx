import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {SearchCards} from '../../components/SearchCards/SearchCards';
import {useDispatch} from 'react-redux';
import {allSearchQuery} from '../../features/modules/oneSearch/oneSearch.actions';
import {useHistory} from 'react-router-dom';

export const SearchMoviePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname !== '/search/tv') {
        dispatch(allSearchQuery(''));
      }
    });
  }, [history]);

  return (
    <Box
      minH={'100vh'}
      pt={{ base: '100px', '2md': '0' }}
      pl={{ base: '0', '2md': '56px' }}
      pb={'50px'}
    >
      <SearchCards card={'movie'} />
    </Box>
  );
};
