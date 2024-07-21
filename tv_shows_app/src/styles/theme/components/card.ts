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
      borderRadiusBotton: '8px',
      overflow: 'hidden',
    },
    container: {
      boxShadow: 'customShadow',
      borderRadius: '8px',
      overflow: 'hidden',
    },
  },
  sizes: {
    sm: {
      card: {
        width: '342px',
        height: '480px',
      },
      container: {
        margin: '32px',
        width: '342px',
        height: '480px',
      },
      header: {
        w: '100%',
        padding: '0',
        height: '428px',
      },
      body: {
        py: '18px',
      },
    },
    md: {
      card: {
        width: '240px',
        height: '375px',
      },
      container: {
        margin: '18px',
        width: '240px',
        height: '375px',
      },
      header: {
        w: '100%',
        padding: '0',
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
