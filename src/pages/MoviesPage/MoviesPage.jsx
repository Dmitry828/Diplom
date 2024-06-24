import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {ShowCaseCards} from '../../components/ShowCaseCards/ShowCaseCards';
import {searchDefRequest} from '../../features/modules/search/search.actions';
import {useDispatch, useSelector} from 'react-redux';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.search.loading);

  useEffect(() => {
    dispatch(searchDefRequest('movie', 1));
  }, []);

  return (
    loading ? <PageLoad/> : (
      <Box
        minH={'100vh'}
        pt={{ base: '100px', '2md': '0' }}
        pl={{ base: '0', '2md': '55px' }}
        pb={'50px'}
      >
        <ShowCaseCards entrie={'movie'} />
      </Box>
    )
  );
};
