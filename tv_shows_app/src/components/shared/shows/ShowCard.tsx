import { IShow } from '@/typings/show';
import { Container, Flex, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface IShowCard {
  show: IShow;
}

export const ShowCard = ({ show }: IShowCard) => {
  return (
    <Flex
      flexDirection="column"
      width="300px"
      maxWidth="20%"
      height="400px"
      maxHeight="30%"
      borderRadius="8px"
      overflow="hidden"
      as={NextLink}
      href={`/all-shows/${show.title}`}
    >
      <Image src={show.imageUrl} objectFit="cover" height="70%" />
      <Flex
        flexDirection="column"
        padding="2"
        backgroundColor="orange.100"
        fontSize="xs"
        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
      >
        <Text> {show.title} </Text>
        <Text> {show.averageRating}/5 </Text>
      </Flex>
    </Flex>
  );
};
