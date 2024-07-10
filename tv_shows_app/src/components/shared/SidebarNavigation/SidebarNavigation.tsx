import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useParams } from 'next/navigation';

export const SidebarNavigation = () => {
  const path = window.location.pathname;
  return (
    <Flex
      width="100%"
      flexDirection="column"
      gap="10"
      backgroundColor="pink.900"
      height="100%"
      padding="4"
      fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    >
      <Text color="white" fontWeight="700" fontSize="xl">
        TV shows APP
      </Text>
      <Flex flexDirection="column" fontSize="md" color="white" gap="2">
        <Text
          as={NextLink}
          href="/shows"
          textDecoration={path == '/shows' ? 'underline' : ''}
        >
          All shows
        </Text>
        <Text
          as={NextLink}
          href="/top-rated"
          textDecoration={path == '/top-rated' ? 'underline' : ''}
        >
          Top rated
        </Text>
        <Text>My profile</Text>
      </Flex>
      <Text marginTop="auto" color="white">
        Log out
      </Text>
    </Flex>
  );
};
