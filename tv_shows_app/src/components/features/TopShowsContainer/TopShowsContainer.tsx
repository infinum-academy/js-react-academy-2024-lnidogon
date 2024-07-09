import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getTopShows } from '@/fetchers/shows';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

export const TopShowsContainer = () => {
  const { data, error, isLoading } = useSWR(`/api/shows`, () => getTopShows());
  const showList = data?.shows || [];
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
          <SidebarNavigation selectedCategory="top" />
        </Box>
        <Box width="85%">
          <ShowsList shows={showList} />
        </Box>
      </Flex>
    </main>
  );
};
