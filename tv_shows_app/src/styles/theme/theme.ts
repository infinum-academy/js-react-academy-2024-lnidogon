import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';
import Button from './components/button';
import Input from './components/inputs';
import Card from './components/card';
import radii from './foundations/radius';
import fontSize from './foundations/fontSize';
import fontWeight from './foundations/fontWeight';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'purple.700',
        height: 'fit-content',
        fontWeight: 'default',
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
  fontSize,
  fontWeight,
  shadows,
});

export default theme;
