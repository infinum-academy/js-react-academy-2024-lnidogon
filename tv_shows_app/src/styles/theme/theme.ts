import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import textStyles from './foundations/textStyles';
import shadows from './foundations/shadows';
import Button from './components/button';
import Input from './components/inputs';
import Card from './components/card';

const theme = extendTheme({
  components: {
    Button,
    Input,
    Card,
  },
  colors,
  fonts,
  textStyles,
  shadows,
});

export default theme;
