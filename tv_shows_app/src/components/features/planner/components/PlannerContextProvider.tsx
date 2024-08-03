import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { createContext, ReactNode, useState } from 'react';
import useSWR from 'swr';

interface IPlannerContext {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  rankedShows: Array<IShow>;
  setRankedShows: (newRankedShows: Array<IShow>) => void;
  tourSize: number;
  setTourSize: (newTourSize: number) => void;
  finalRanking: Array<IShow>;
  setFinalRanking: (newFinalRanking: Array<IShow>) => void;
  allShows: Array<IShow>;
  setAllShows: (newAllShows: Array<IShow>) => void;
}
export const PlannerContext = createContext<IPlannerContext>(
  {} as IPlannerContext
);

interface IPlannerContextProviderProps {
  children: ReactNode;
}

export const PlannerContextProvider = ({
  children,
}: IPlannerContextProviderProps) => {
  const [rankedShows, setRankedShows] = useState<Array<IShow>>([]);
  const [finalRanking, setFinalRanking] = useState<Array<IShow>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [tourSize, setTourSize] = useState(0);
  const [allShows, setAllShows] = useState<Array<IShow>>([]);
  return (
    <PlannerContext.Provider
      value={{
        tourSize,
        setTourSize,
        currentStep,
        rankedShows,
        setCurrentStep,
        setRankedShows,
        finalRanking,
        setFinalRanking,
        allShows: allShows,
        setAllShows,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};
