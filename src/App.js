import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './services/routes';
import {Box} from '@chakra-ui/react';
import {NavBar} from './components/Navbar/NavBar';
import {ScrollToTop} from './common/ScrollToTop';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {dataRequest} from './features/modules/data/data.actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequest());
  }, []);

  return (
    <Router>
      <Box pos={'relative'}>
        <NavBar />
        <ScrollToTop />
        <Routes />
      </Box>
    </Router>
  );
};
