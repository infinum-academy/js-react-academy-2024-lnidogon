import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export interface IShowCard {
  show: IShow;
}

export const ShowCard = ({ show }: IShowCard) => {
  return (
    <Card
      size={{ base: 'sm', lg: 'md' }}
      width={{ base: '342px', lg: '240px' }}
      margin={{ base: '32px', lg: ' 18px' }}
      as={NextLink}
      href={`/shows/${show.id}`}
    >
      <CardHeader w="100%">
        <Image src={show.image_url} objectFit="cover" alt="Slika showa" />
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ base: 'row', lg: 'column' }}
          alignItems={{ base: 'center', lg: 'start' }}
        >
          <Text fontSize="subtitle" color="purple.500">
            {show.title}
          </Text>
          <Flex
            direction="row"
            alignItems="center"
            gap="4px"
            ml={{ base: 'auto', lg: '0' }}
            mr={{ base: '20px', lg: 'auto' }}
          >
            <StarIcon width="16px" color="purple.500" />
            <Text fontSize="smallCaption" color="purple.500">
              {!show.average_rating ? 'no rating' : show.average_rating + '/5'}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
