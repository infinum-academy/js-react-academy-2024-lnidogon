import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { headers } from 'next/headers';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  'card',
  'header',
  'body',
  'container',
]);

const Card = helpers.defineMultiStyleConfig({
  baseStyle: {
    body: {
      borderRadiusBotton: 'smRadius',
      overflow: 'hidden',
    },
    container: {
      boxShadow: 'sm',
      borderRadius: 'smRadius',
      overflow: 'hidden',
    },
  },
  sizes: {
    sm: {
      card: {
        height: '480px',
      },
      container: {
        height: '480px',
      },
      header: {
        padding: '0',
        height: '428px',
      },
      body: {
        py: '18px',
      },
    },
    md: {
      card: {
        height: '375px',
      },
      container: {
        height: '375px',
      },
      header: {
        padding: 0,
        height: '300px',
      },
      body: {
        py: '18px',
      },
    },
  },
  variants: {
    default: {
      body: {
        backgroundColor: 'white',
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
});

export default Card;
