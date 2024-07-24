import { useContext, useEffect, useState } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { UNSAFE_DataRouterContext } from 'react-router-dom';

export const PlannerStep = () => {
  const {
    rankedShows,
    currentStep,
    setRankedShows,
    tourSize,
    setCurrentStep,
    setFinalRanking,
  } = useContext(PlannerContext);
  let targetIndex = Math.abs(currentStep);
  let shows = [rankedShows[targetIndex * 2], rankedShows[targetIndex * 2 + 1]];
  const [selected, setSelected] = useState(
    rankedShows[targetIndex] == undefined
      ? 2
      : rankedShows[targetIndex] != rankedShows[targetIndex * 2]
        ? 1
        : 0
  );

  function updateRankings(index: number) {
    const tempArr = [...rankedShows];
    tempArr[targetIndex] = tempArr[targetIndex * 2 + index];
    setRankedShows(tempArr);
    setSelected(index);
  }

  useEffect(() => {
    setSelected(2);
    if (shows[0] == undefined) updateRankings(1);
    else if (shows[1] == undefined) updateRankings(0);
    if (shows[0] == undefined || shows[1] == undefined) {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
      else setCurrentStep(Math.ceil(currentStep / 2));
      return;
    }
  }, [currentStep]);
  return (
    <>
      {shows[0] != undefined && shows[1] != undefined ? (
        <Flex
          px="20px"
          justifyContent="space-around"
          width="100%"
          height="280px"
        >
          {[0, 1].map((index) => (
            <Flex
              _hover={{ cursor: 'pointer' }}
              key={index}
              direction="column"
              onClick={() => {
                updateRankings(index);
              }}
              width="40%"
              border="4px"
              borderColor={selected != index ? 'purple.300' : 'white'}
              borderRadius="mdRadius"
              overflow="hidden"
            >
              <Image
                alt="slika showa"
                src={shows[index].image_url}
                height="70%"
                objectFit="cover"
              />
              <Box padding={3} backgroundColor="white" height="100%">
                <Text>{shows[index].title}</Text>
                <Text hideBelow="lg">{shows[index].average_rating}/5</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};
