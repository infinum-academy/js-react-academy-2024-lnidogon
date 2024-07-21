import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetailsMobile = ({ show }: IShowDetailsProps) => {
  return (
    <Flex
      height="544px"
      width="344px"
      flexDirection="column"
      borderRadius="20px"
      overflow="hidden"
    >
      <Image
        src={show?.image_url}
        alt="Naslovna slika showa"
        fallbackSrc="https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("
        objectFit="cover"
        height="344px"
      />
      <Flex
        height="200px"
        flexDirection="column"
        gap="3"
        color="black"
        backgroundColor="white"
        padding="2"
        paddingRight="5"
        paddingLeft="5"
        overflow="hidden"
        borderBottomRadius="7"
        bgColor="white"
      >
        <Flex flexDirection="column" width="fit-content" minWidth="30%">
          <Heading textStyle="body" color="purple2">
            {show.title}
          </Heading>
          <Flex alignItems="center" gap="4px">
            <StarIcon width="24px" color="purple2" />
            <Text textStyle="body" color="purple2">
              {!show.average_rating ? `no ratings` : show.average_rating + `/5`}
            </Text>
          </Flex>
        </Flex>
        <Text
          ml="auto"
          mr="50px"
          width="300px"
          textStyle="smallCaption"
          color="purple2"
        >
          {show.description}
        </Text>
      </Flex>
    </Flex>
  );
};
