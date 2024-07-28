import theme from '@/styles/theme/theme';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SidebarNavigationMobile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <Flex
      width="100%"
      flexDirection="row"
      gap="10"
      backgroundColor="purple.700"
      height="100%"
      padding="4"
    >
      <Text color="white" fontWeight="700" fontSize="title">
        TV shows APP
      </Text>
      <>
        <IconButton
          ml="auto"
          backgroundColor="transparent"
          color="white"
          _hover={{ backgroundColor: 'transparent' }}
          colorScheme="teal"
          onClick={onOpen}
          icon={<HamburgerIcon />}
          size="md"
          aria-label={'dropdown menu'}
        >
          Open
        </IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent backgroundColor="purple.500">
            <DrawerCloseButton color="white" border="1px" borderRadius="full" />

            <DrawerBody mt="84px">
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
                  backgroundColor={
                    path == '/shows' ? 'purple.300' : 'transparent'
                  }
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
                  backgroundColor={
                    path == '/top-rated' ? 'purple.300' : 'transparent'
                  }
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
                  backgroundColor={
                    path == '/my-profile' ? 'purple.300' : 'transparent'
                  }
                >
                  My profile
                </Text>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
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
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};
