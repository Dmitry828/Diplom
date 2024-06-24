import {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Box} from '@chakra-ui/react';
import {Entrie} from '../../components/Entrie/Entrie';
import {clearEntrie, entrieRequest,} from '../../features/modules/entrie/entrie.actions';
import {useDispatch, useSelector} from 'react-redux';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const EntrieSerialPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(entrieRequest(id, 'tv'));

    return history.listen(() => {
      dispatch(clearEntrie());
    });
  }, []);

  const entrieSerial = useSelector((state) => state.entrie.entrie);
  const entrieIsLoading = useSelector(state => state.entrie.loading);

  return (
    entrieIsLoading ? <PageLoad/> : (
      <Box minH={'100vh'}>
        <Entrie id={id} data={entrieSerial} />
      </Box>
    )
  );
};
