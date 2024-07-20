import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      bg: 'purple2',
      color: 'white',
      borderRadius: '40px',
      textStyle: 'button',
      mx: '56px',
    },
  },
  sizes: {
    md: {
      field: {
        px: '50px',
        width: '388px',
        height: '56px',
      },
    },
  },

  variants: {},
});

export default Input;
