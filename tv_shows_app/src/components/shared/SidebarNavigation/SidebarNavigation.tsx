import theme from '@/styles/theme/theme';
import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SidebarNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <Flex
      width="100%"
      flexDirection="column"
      gap="10"
      backgroundColor="darkPurple"
      height="100%"
      padding="4"
    >
      <Text color="white" fontWeight="700" fontSize="xl">
        TV shows APP
      </Text>
      <Flex flexDirection="column" fontSize="md" color="white" gap="2">
        <Text
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/shows"
          backgroundColor={path == '/shows' ? 'purple2' : 'darkPurple'}
        >
          All shows
        </Text>
        <Text
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/top-rated"
          backgroundColor={path == '/top-rated' ? 'purple2' : 'darkPurple'}
        >
          Top rated
        </Text>
        <Text
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/my-profile"
          backgroundColor={path == '/my-profile' ? 'purple2' : 'darkPurple'}
        >
          My profile
        </Text>
      </Flex>
      <Text
        width="90px"
        marginTop="auto"
        color="white"
        as="button"
        marginRight="auto"
        _hover={{ color: 'red' }}
        onClick={() => {
          localStorage.removeItem('tv-shows-uid'),
            localStorage.removeItem('tv-shows-header');
          router.push('/login');
        }}
      >
        Log out
      </Text>
    </Flex>
  );
};
