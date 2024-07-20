import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import textStyles from './foundations/textStyles';
import shadows from './foundations/shadows';
import Button from './components/button';
import Input from './components/inputs';

const theme = extendTheme({
  components: {
    Button,
    Input,
  },
  colors,
  fonts,
  textStyles,
  shadows,
});

export default theme;
