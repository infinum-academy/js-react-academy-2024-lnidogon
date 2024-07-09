import { ShowSection } from '@/components/features/shows/ShowSection';
import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Flex, Box } from '@chakra-ui/react';

export default function AllShows() {
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
}
