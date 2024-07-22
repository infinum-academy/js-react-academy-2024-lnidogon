import { defineStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    fontSize: 'button',
    fontWeight: 'bold',
  },
  sizes: {
    sm: {
      height: '38px',
    },
    md: {
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
