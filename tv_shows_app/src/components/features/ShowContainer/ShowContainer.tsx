import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { ShowSection } from '../shows/ShowSection';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { getShow } from '@/fetchers/shows';

export const ShowContainer = () => {
  const params = useParams();
  const { data, error, isLoading } = useSWR(`/api/shows`, () =>
    getShow(params.id as string)
  );
  if (isLoading || !data) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="space-around">
        <Spinner />
      </Flex>
    );
  }
  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation selectedCategory="none" />
        </Box>
        <Box width="85%">
          <ShowSection show={data} />
        </Box>
      </Flex>
    </main>
  );
};
