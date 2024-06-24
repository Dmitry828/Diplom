import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {useHistory, useParams} from 'react-router-dom';
import {Entrie} from '../../components/Entrie/Entrie';
import {useDispatch, useSelector} from 'react-redux';
import {clearEntrie, entrieRequest} from '../../features/modules/entrie/entrie.actions';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const EntrieMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(entrieRequest(id, 'movie'));

    return history.listen(() => {
      dispatch(clearEntrie());
    });
  }, []);

  const movieEntrie = useSelector((state) => state.entrie.entrie);
  const movieIsLoading = useSelector(state => state.entrie.loading);

  return (
    movieIsLoading ? <PageLoad/> : (
      <Box minH={'100vh'}>
        <Entrie id={id} data={movieEntrie} />
      </Box>
    )
  );
};
