import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetais = ({ show }: IShowDetailsProps) => {
  return (
    <Flex height="608px" width="1052px" flexDirection="column" borderRadius="7">
      <Image
        src={show?.image_url}
        alt="Naslovna slika showa"
        fallbackSrc="https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("
        objectFit="cover"
        height="440px"
      />
      <Flex
        height="168px"
        flexDirection="row"
        gap="3"
        color="black"
        backgroundColor="white"
        padding="2"
        paddingRight="5"
        paddingLeft="5"
        overflow="hidden"
        alignItems="center"
        borderBottomRadius="7"
        bgColor="white"
      >
        <Flex flexDirection="column" width="fit-content" minWidth="30%">
          <Heading textStyle="heading" color="purple2">
            {show.title}
          </Heading>
          <Flex alignItems="center" gap="4px">
            <StarIcon width="24px" color="purple2" />
            <Text textStyle="title" color="purple2">
              {!show.average_rating ? `no ratings` : show.average_rating + `/5`}
            </Text>
          </Flex>
        </Flex>
        <Text
          ml="auto"
          mr="50px"
          width="477px"
          textStyle="body"
          color="purple2"
        >
          {show.description}
        </Text>
      </Flex>
    </Flex>
  );
};
