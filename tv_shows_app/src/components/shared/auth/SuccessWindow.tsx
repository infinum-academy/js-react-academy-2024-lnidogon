import { Button, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISuccessWindow {
  link: string;
  message: string;
}

export const SuccessWindow = ({ link, message }: ISuccessWindow) => (
  <Flex
    backgroundColor="pink.800"
    color="white"
    direction="column"
    alignItems="center"
    width="400px"
    height="300px"
    padding=""
    justifyContent="center"
    gap="5"
  >
    <Text>{message}</Text>
    <Button
      as={NextLink}
      href={link}
      backgroundColor="orange.100"
      _hover={{ backgroundColor: 'green.300' }}
    >
      Proceed
    </Button>
  </Flex>
);
