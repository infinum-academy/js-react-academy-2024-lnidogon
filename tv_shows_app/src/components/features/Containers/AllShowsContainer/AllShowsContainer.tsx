'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowList/ShowsList';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import { Box } from '@chakra-ui/react';
import useSWR from 'swr';
import { Planner } from '@/components/features/planner/Planner';

export const AllShowsContainer = () => {
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
  return (
    <>
      <ShowsList shows={showList} />
      <Planner />
    </>
  );
};
