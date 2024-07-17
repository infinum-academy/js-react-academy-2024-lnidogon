import { IShow } from '@/typings/show';
import { Flex, Image, Text } from '@chakra-ui/react';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetais = ({ show }: IShowDetailsProps) => {
  return (
    <Flex
      height="fit-content"
      width="80%"
      maxWidth="1000px"
      flexDirection="column"
      borderRadius="7"
      overflow="hidden"
      fontFamily={
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
      }
    >
      <Image
        src={show?.image_url}
        alt="slika nije učitana"
        fallbackSrc="https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("
        objectFit="cover"
        height="40"
      />
      <Flex
        flexDirection="row"
        gap="3"
        color="black"
        backgroundColor="orange.100"
        padding="2"
        paddingRight="5"
        paddingLeft="5"
        overflow="hidden"
        alignItems="center"
        borderBottomRadius="7"
      >
        <Flex flexDirection="column" width="fit-content" minWidth="30%">
          <Text fontSize="lg " fontWeight="700" width="fit-content">
            {show.title}
          </Text>
          <Text fontSize="sm" textDecoration="underline" width="fit-content">
            {!show.average_rating ? `no ratings` : show.average_rating + `/5`}
          </Text>
        </Flex>
        <Text fontSize="xs">{show.description}</Text>
      </Flex>
    </Flex>
  );
};
