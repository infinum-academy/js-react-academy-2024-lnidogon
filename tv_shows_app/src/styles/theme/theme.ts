import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import textStyles from './foundations/textStyles';
import shadows from './foundations/shadows';
import Button from './components/button';
import Input from './components/inputs';
import Card from './components/card';
import radii from './foundations/radius';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'darkPurple',
        height: 'fit-content',
      },
    },
  },
  components: {
    Button,
    Input,
    Card,
  },
  radii,
  colors,
  fonts,
  textStyles,
  shadows,
});

export default theme;
