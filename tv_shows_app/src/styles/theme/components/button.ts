import { defineStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
  },
  sizes: {
    md: {
      width: '144px',
      height: '52px',
    },
  },

  variants: {
    default: {
      bg: 'white',
      color: 'purple2',
      _hover: {
        bg: 'lightPurple',
      },
    },
  },
});

export default Button;
