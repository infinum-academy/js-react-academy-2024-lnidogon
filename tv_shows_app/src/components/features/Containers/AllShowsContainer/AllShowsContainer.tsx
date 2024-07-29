'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowList/ShowsList';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import useSWR from 'swr';
import { Planner } from '@/components/features/planner/Planner';
import { useContext } from 'react';
import { PlannerContext } from '../../planner/components/PlannerContextProvider';

export const AllShowsContainer = () => {
  const { setAllShows } = useContext(PlannerContext);
  const { data, error, isLoading } = useSWR<{ shows: Array<IShow> }>(
    swrKeys.allShows,
    async () => await fetcher<{ shows: Array<IShow> }>(swrKeys.allShows)
  );
  const showList = data?.shows || [];
  if (isLoading || !data) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  setAllShows(showList);
  return (
    <>
      <ShowsList shows={showList} />
      <Planner />
    </>
  );
};
