import { AllShowsContainer } from '@/components/features/AllShowsContainer/AllShowsContainer';
import { ShowSection } from '@/components/features/shows/ShowSection';
import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Flex, Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

export default function AllShows() {
  return <AllShowsContainer />;
}
