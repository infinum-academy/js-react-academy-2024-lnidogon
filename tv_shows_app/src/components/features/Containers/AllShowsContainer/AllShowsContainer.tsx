'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getMutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import { Box, cookieStorageManager, Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { title } from 'process';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface IGetAllShowsParams {
  page: string;
  items: string;
}
export const AllShowsContainer = () => {
  const { trigger } = useSWRMutation(
    swrKeys.allShows,
    getMutator<IGetAllShowsParams>
  );
  async function getAllShows(params: IGetAllShowsParams) {
    return await trigger(params);
  }

  const { data, error, isLoading } = useSWR(`/api/shows`, async () =>
    getAllShows({ page: '2', items: '5' })
  );
  const showList = data?.shows || [];
  if (isLoading || !data) {
    console.log(isLoading + ' ' + data);
    return <LoadingScreen />;
  }

  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return <ShowsList shows={showList} />;
};
