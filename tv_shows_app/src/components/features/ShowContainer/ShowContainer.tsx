import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex } from '@chakra-ui/react';
import { ShowSection } from '../shows/ShowSection';

export const ShowContainer = () => {
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation />
        </Box>
        <Box width="85%">
          <ShowSection />
        </Box>
      </Flex>
    </main>
  );
};
