import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {playingRequest} from '../../features/modules/playing/playing.actions';
import {Box} from '@chakra-ui/react';
import {IntroSlider} from '../../components/IntroSlider/IntroSlider';
import {NewCards} from '../../components/NewCards/NewCards';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.nowPlaying.loading);

  useEffect(() => {
    dispatch(playingRequest());
  }, []);

  return (
    loading ? <PageLoad/> : (
      <Box minH={'100vh'}>
        <IntroSlider />
        <Box pl={{ base: '0', '2md': '56px' }}>
          <NewCards card={'movie'} />
          <NewCards card={'tv'} />
        </Box>
      </Box>
    )
  );
};
