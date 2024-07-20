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
      width="240px"
      height="375px"
      minHeight="200px"
      borderRadius="8px"
      overflow="hidden"
      as={NextLink}
      href={`/shows/${show.id}`}
    >
      <CardHeader w="100%" padding="0" height="300px">
        <Image src={show.image_url} objectFit="cover" alt="Slika showa" />
      </CardHeader>
      <CardBody backgroundColor="white" py="18px">
        <Text textStyle="subtitle" color="purple2">
          {' '}
          {show.title}{' '}
        </Text>
        <Flex direction="row" alignItems="center" gap="4px">
          <StarIcon width="16px" color="purple2" />
          <Text textStyle="smallCaption" color="purple2">
            {!show.average_rating ? 'no rating' : show.average_rating + '/5'}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
