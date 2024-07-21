import { defineStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    textStyle: 'button',
  },
  sizes: {
    sm: {
      width: '97px',
      height: '38px',
    },
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
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
});

export default Button;
