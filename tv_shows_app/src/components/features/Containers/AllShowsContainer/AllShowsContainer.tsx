'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getMutator } from '@/fetchers/getMutator';
import { IShow } from '@/typings/show';
import { Box, Flex, Spinner } from '@chakra-ui/react';
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
    'https://tv-shows.infinum.academy/shows',
    getMutator<IGetAllShowsParams>
  );
  async function getAllShows(params: IGetAllShowsParams) {
    const response = await trigger(params);
    return response.data;
  }

  const { data, error, isLoading } = useSWR(`/api/shows`, () =>
    getAllShows({ page: '2', items: '5' })
  );
  const showList = data?.shows || [];
  if (isLoading || !data) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation />
        </Box>
        <Box width="85%">
          <ShowsList shows={showList} />
        </Box>
      </Flex>
    </main>
  );
};
