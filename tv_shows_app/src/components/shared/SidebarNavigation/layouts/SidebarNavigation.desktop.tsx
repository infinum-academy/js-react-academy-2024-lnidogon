'use client';
import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SidebarNavigationDesktop = () => {
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
      backgroundColor="purple.700"
      height="100%"
      padding="4"
    >
      <Text color="white" fontWeight="700" fontSize="title">
        TV shows APP
      </Text>
      <Flex flexDirection="column" color="white" gap="2">
        <Text
          fontSize="smallCaption"
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/shows"
          backgroundColor={path == '/shows' ? 'purple.500' : 'purple.700'}
        >
          All shows
        </Text>
        <Text
          fontSize="smallCaption"
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/top-rated"
          backgroundColor={path == '/top-rated' ? 'purple.500' : 'purple.700'}
        >
          Top rated
        </Text>
        <Text
          fontSize="smallCaption"
          pt="10px"
          borderRadius="full"
          width="140px"
          height="44px"
          textAlign="center"
          as={NextLink}
          href="/my-profile"
          backgroundColor={path == '/my-profile' ? 'purple.500' : 'purple.700'}
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
        _hover={{ color: 'purple.300' }}
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
