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
      color: 'purple.500',
      _hover: {
        bg: 'purple.300',
      },
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
});

export default Button;
