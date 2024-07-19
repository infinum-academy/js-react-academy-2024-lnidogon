import { Box, Flex, Spinner } from '@chakra-ui/react';

export const LoadingScreen = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
      backgroundColor="primary"
    >
      <Spinner color="white" />
    </Flex>
  );
};
