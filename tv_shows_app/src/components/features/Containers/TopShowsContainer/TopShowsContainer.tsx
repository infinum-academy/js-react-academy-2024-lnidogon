'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowList/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getMutator } from '@/fetchers/mutators';
import { getTopShows } from '@/fetchers/shows';
import { swrKeys } from '@/fetchers/swrKeys';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface IGetAllShowsParams {
  page: string;
  items: string;
}

export const TopShowsContainer = () => {
  const { trigger } = useSWRMutation(
    swrKeys.topRated,
    getMutator<IGetAllShowsParams>
  );
  async function getTopShows(params: IGetAllShowsParams) {
    return await trigger(params);
  }

  const { data, error, isLoading } = useSWR(`/api/top-rated`, () =>
    getTopShows({ page: '1', items: '20' })
  );
  const showList = data?.shows || [];
  if (isLoading || !data) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return <ShowsList shows={showList} />;
};
