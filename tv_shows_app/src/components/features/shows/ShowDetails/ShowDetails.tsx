import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({ show }: IShowDetailsProps) => {
  return (
    <Flex
      height={{ base: '544px', lg: '608px' }}
      width={{ base: '344px', lg: '1052px' }}
      flexDirection="column"
      borderRadius="xlRadius"
      overflow="hidden"
    >
      <Image
        src={show?.image_url}
        alt="Naslovna slika showa"
        fallbackSrc="https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("
        objectFit="cover"
        height={{ base: '344px', lg: '440px' }}
      />
      <Flex
        height={{ base: '200px', lg: '168px' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={3}
        color="black"
        backgroundColor="white"
        padding={2}
        px={5}
        overflow="hidden"
        borderBottomRadius={7}
        bgColor="white"
        alignItems={{ base: 'none', lg: 'center' }}
      >
        <Flex flexDirection="column" width="fit-content" minWidth="30%">
          <Heading fontSize="body" color="purple.500">
            {show.title}
          </Heading>
          <Flex alignItems="center" gap={1}>
            <StarIcon width="24px" color="purple.500" />
            <Text fontSize="body" color="purple.500">
              {!show.average_rating ? `no ratings` : show.average_rating + `/5`}
            </Text>
          </Flex>
        </Flex>
        <Text
          ml="auto"
          mr="50px"
          width={{ bas: '300px', lg: '478px' }}
          fontSize="smallCaption"
          color="purple.500"
        >
          {show.description}
        </Text>
      </Flex>
    </Flex>
  );
};
