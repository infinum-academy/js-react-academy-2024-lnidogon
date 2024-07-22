'use client';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import theme from '@/styles/theme/theme';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Spinner,
  Text,
  typography,
} from '@chakra-ui/react';
import { log } from 'console';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { SidebarNavigationDesktop } from './layouts/SidebarNavigation.desktop';
import { SidebarNavigationMobile } from './layouts/SidebarNavigation.mobile';

export const SidebarNavigation = () => {
  return (
    <>
      <Hide above="lg">
        <SidebarNavigationMobile />
      </Hide>
      <Show above="lg">
        <SidebarNavigationDesktop />
      </Show>
    </>
  );
};
