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
      as={NextLink}
      href={`/shows/${show.id}`}
    >
      <CardHeader>
        <Image src={show.image_url} objectFit="cover" alt="Slika showa" />
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ base: 'row', lg: 'column' }}
          alignItems={{ base: 'center', lg: 'start' }}
        >
          <Text hideBelow="lg" textStyle="subtitle" color="purple2">
            {show.title}
          </Text>
          <Flex
            direction="row"
            alignItems="center"
            gap="4px"
            ml={{ base: 'auto', lg: '0' }}
            mr={{ base: '20px', lg: 'auto' }}
          >
            <Text hideFrom="lg" textStyle="subtitle" color="purple2">
              {show.title}
            </Text>
            <StarIcon width="16px" color="purple2" />
            <Text textStyle="smallCaption" color="purple2">
              {!show.average_rating ? 'no rating' : show.average_rating + '/5'}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
