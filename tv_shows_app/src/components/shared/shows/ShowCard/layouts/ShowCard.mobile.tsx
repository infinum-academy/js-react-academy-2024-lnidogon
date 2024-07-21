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

export const ShowCardMobile = ({ show }: IShowCard) => {
  return (
    <Card size="sm" as={NextLink} href={`/shows/${show.id}`}>
      <CardHeader>
        <Image src={show.image_url} objectFit="cover" alt="Slika showa" />
      </CardHeader>
      <CardBody>
        <Flex direction="row" alignItems="center">
          <Text textStyle="subtitle" color="purple2">
            {show.title}
          </Text>
          <Flex
            direction="row"
            alignItems="center"
            gap="4px"
            ml="auto"
            mr="20px"
          >
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
