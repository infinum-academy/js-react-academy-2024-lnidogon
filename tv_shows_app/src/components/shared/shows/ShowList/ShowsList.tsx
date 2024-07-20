import { IShow } from '@/typings/show';
import { Flex } from '@chakra-ui/react';
import { ShowCard } from '../ShowCard/ShowCard';

interface IShowsList {
  shows: Array<IShow>;
}

export const ShowsList = ({ shows }: IShowsList) => {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      backgroundColor="darkPurple"
      width="100%"
      height="100%"
      padding="31px"
      rowGap="31px"
      columnGap="31px"
      overflow="auto"
    >
      {shows.map((show, index) => (
        <ShowCard show={show} key={index} />
      ))}
    </Flex>
  );
};
