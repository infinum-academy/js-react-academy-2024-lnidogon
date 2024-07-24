import { useContext } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { Flex, Text } from '@chakra-ui/react';

export const PlannerResult = () => {
  const { finalRanking } = useContext(PlannerContext);
  return (
    <>
      <Text> This is your current show ranking: </Text>
      <Flex direction="column">
        {finalRanking.map((show, index) => (
          <Flex>
            <Text>{index}.</Text>
            <Text>{show.title}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
