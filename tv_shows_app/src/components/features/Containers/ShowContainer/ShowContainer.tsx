'use client';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { ShowSection } from '../../shows/ShowSection';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { getShow } from '@/fetchers/shows';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import useSWRMutation from 'swr/mutation';
import { IShow } from '@/typings/show';
import { mutator } from '@/fetchers/mutator';
import { getMutator } from '@/fetchers/getMutator';

export const ShowContainer = () => {
  const params = useParams();
  const { trigger } = useSWRMutation(
    `https://tv-shows.infinum.academy/shows/${params.id}`,
    getMutator
  );
  async function getShow() {
    const response = await trigger(params);
    return response.data;
  }

  const { data, error, isLoading } = useSWR(
    `/api/shows/${params.id}`,
    async () => getShow()
  );

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
          <ShowSection show={data.shows} />
        </Box>
      </Flex>
    </main>
  );
};
