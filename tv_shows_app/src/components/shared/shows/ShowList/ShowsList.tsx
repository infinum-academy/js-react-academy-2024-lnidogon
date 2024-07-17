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
      backgroundColor="pink.900"
      width="100%"
      height="100%"
      padding="8"
      gap="7"
      overflow="auto"
    >
      {shows.map((show, index) => (
        <ShowCard show={show} key={index} />
      ))}
    </Flex>
  );
};
