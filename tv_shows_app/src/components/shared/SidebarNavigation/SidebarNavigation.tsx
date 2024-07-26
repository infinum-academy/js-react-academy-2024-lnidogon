'use client';
import { Hide, Show } from '@chakra-ui/react';
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
