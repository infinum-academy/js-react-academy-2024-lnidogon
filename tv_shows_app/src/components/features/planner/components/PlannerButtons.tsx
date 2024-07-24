import { useContext, useEffect, useState } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { Button, Flex } from '@chakra-ui/react';

export const PlannerButtons = () => {
  const {
    finalRanking,
    setFinalRanking,
    currentStep,
    setCurrentStep,
    rankedShows,
    tourSize,
    setRankedShows,
  } = useContext(PlannerContext);

  function nextStep() {
    if (Math.abs(currentStep) == 1) {
      setFinalRanking([...finalRanking, rankedShows[1]]);
      setCurrentStep(0);
    } else if (currentStep > 0) setCurrentStep(currentStep - 1);
    else if (currentStep < 0) setCurrentStep(Math.floor(currentStep / 2));
  }

  function findBestRoot(index: number, bestShow: IShow) {
    if (index >= tourSize) return index;
    if (rankedShows[index * 2] == bestShow)
      return findBestRoot(index * 2, bestShow);
    return findBestRoot(index * 2 + 1, bestShow);
  }

  function nextRound() {
    let rootIndex = findBestRoot(1, rankedShows[1]);
    let tempArr = rankedShows.map((show) =>
      show == rankedShows[1] ? undefined : show
    );
    setRankedShows(tempArr as IShow[]);
    setCurrentStep(Math.floor(-rootIndex / 2));
  }
  useEffect(() => {
    console.log('hi\n');
  }, [rankedShows]);
  const selected = rankedShows[Math.abs(currentStep)];
  console.log(currentStep);
  return (
    <Flex>
      {currentStep && selected ? (
        <Button onClick={() => nextStep()}> Next </Button>
      ) : (
        <></>
      )}
      {!currentStep ? (
        <Button onClick={() => nextRound()}> Add show </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
};
