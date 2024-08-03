import { useContext, useEffect } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { PlannerStep } from './PlannerStep';
import { PlannerResult } from './PlannerResult';

export const PlannerStepper = () => {
  const {
    allShows,
    currentStep,
    tourSize,
    setTourSize,
    setRankedShows,
    setCurrentStep,
    setFinalRanking,
  } = useContext(PlannerContext);
  useEffect(() => {
    if (tourSize == 0) {
      //first power of two greater than showLength
      let binaryShowLength = 0;
      const showLength = allShows.length;
      for (
        binaryShowLength = 1;
        binaryShowLength < showLength;
        binaryShowLength *= 2
      );
      const tempArr = [];
      for (let i = 0; i < 2 * binaryShowLength; i++) tempArr.push(undefined);
      for (let i = 0; i < showLength; i++)
        tempArr[i + binaryShowLength] = allShows[i];
      setTourSize(binaryShowLength);
      setCurrentStep(binaryShowLength - 1);
      setRankedShows(tempArr as IShow[]);
      setFinalRanking([]);
    }
  }, []);

  if (currentStep) return <PlannerStep />;
  else return <PlannerResult />;
};
