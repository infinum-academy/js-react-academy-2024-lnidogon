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
      height="30%"
      minHeight="200px"
      borderRadius="8px"
      overflow="hidden"
      as={NextLink}
      href={`/shows/${show.id}`}
    >
      <Image
        src={show.image_url}
        objectFit="cover"
        height="70%"
        alt="Slika showa"
      />
      <Flex
        flexDirection="column"
        padding="2"
        backgroundColor="orange.100"
        fontSize="xs"
        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        height="fit-content"
        overflow="hidden"
        borderBottomRadius="8px"
      >
        <Text> {show.title} </Text>
        <Text>
          {!show.average_rating ? 'no rating' : show.average_rating + '/5'}
        </Text>
      </Flex>
    </Flex>
  );
};
