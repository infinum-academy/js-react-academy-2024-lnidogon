import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Heading, Hide, Image, Show, Text } from '@chakra-ui/react';
import { ShowDetailsDesktop } from './layouts/ShowDetails.desktop';
import { ShowDetailsMobile } from './layouts/ShowDetails.mobile';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({ show }: IShowDetailsProps) => {
  return (
    <>
      <Show above="1024px">
        <ShowDetailsDesktop show={show} />
      </Show>
      <Hide above="1024px">
        <ShowDetailsMobile show={show} />
      </Hide>
    </>
  );
};
