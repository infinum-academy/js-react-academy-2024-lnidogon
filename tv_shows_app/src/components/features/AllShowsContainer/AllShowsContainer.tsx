import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getAllShows } from '@/fetchers/shows';
import { Box, Flex } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

export const AllShowsContainer = () => {
  const mockShows = [
    {
      averageRating: 5,
      title: 'Friends',
      description:
        'Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.',
      imageUrl:
        'https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg',
    },
  ];
  const params = useParams();

  //id = 1 jer smo nazvali direktorij [id]
  console.log(params);

  const { data, error, isLoading } = useSWR(`/todo-lists/${params.id}`, () =>
    getAllShows()
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Ups... something went wrong </div>;
  }
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation />
        </Box>
        <Box width="85%">
          <ShowsList shows={mockShows} />
        </Box>
      </Flex>
    </main>
  );
};
