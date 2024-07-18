'use client';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { ShowSection } from '../../shows/ShowSection';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { getShow } from '@/fetchers/shows';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';

export const ShowContainer = () => {
  const params = useParams();
  const { data, error, isLoading } = useSWR(`/api/shows/${params.id}`, () =>
    getShow(params.id as string)
  );
  if (isLoading || !data) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  console.log(data);
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation />
        </Box>
        <Box width="85%">
          <ShowSection show={data} />
        </Box>
      </Flex>
    </main>
  );
};
