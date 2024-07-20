'use client';
import { ShowSection } from '@/components/features/shows/ShowSection';
import { TopShowsContainer } from '@/components/features/Containers/TopShowsContainer/TopShowsContainer';
import { ShowsList } from '@/components/shared/shows/ShowList/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Flex, Box } from '@chakra-ui/react';

export default function AllShows() {
  return <TopShowsContainer />;
}
