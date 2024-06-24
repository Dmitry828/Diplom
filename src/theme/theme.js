import {extendTheme} from '@chakra-ui/react';
import {fonts} from './fonts';
import {colors} from './colors';
import {styles} from './styles';
import {Container} from './components/Container';
import {breakpoints} from './breakpoints';
import {config} from './config';
import {Button} from './components/Button';

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: {
    Container,
    Button,
  },
  breakpoints,
  config,
});
