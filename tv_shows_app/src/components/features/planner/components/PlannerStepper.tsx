import { useContext, useEffect } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { PlannerStep } from './PlannerStep';
import { PlannerResult } from './PlannerResult';

export const PlannerStepper = () => {
  const {
    currentStep,
    tourSize,
    allShows,
    setTourSize,
    setRankedShows,
    setCurrentStep,
  } = useContext(PlannerContext);
  useEffect(() => {
    if (tourSize == 0) {
      console.log('lol');
      let bn = 0;
      const n = allShows.length;
      for (bn = 1; bn < n; bn *= 2);
      const tempArr = [];
      for (let i = 0; i < 2 * bn; i++) tempArr.push(undefined);
      for (let i = 0; i < n; i++) tempArr[i + bn] = allShows[i];
      setTourSize(bn);
      setCurrentStep(bn - 1);
      setRankedShows(tempArr as IShow[]);
    }
  }, []);

  if (currentStep) return <PlannerStep />;
  else return <PlannerResult />;
};
