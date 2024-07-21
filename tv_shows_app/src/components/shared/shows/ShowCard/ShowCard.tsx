import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Hide,
  Image,
  Show,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ShowCardDesktop } from './layouts/ShowCard.desktop';
import { ShowCardMobile } from './layouts/ShowCard.mobile';

export interface IShowCard {
  show: IShow;
}

export const ShowCard = ({ show }: IShowCard) => {
  return (
    <>
      <Show above="1024px">
        <ShowCardDesktop show={show} />
      </Show>
      <Hide above="1024px">
        <ShowCardMobile show={show} />
      </Hide>
    </>
  );
};
