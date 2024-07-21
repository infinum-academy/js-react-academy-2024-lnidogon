'use client';

import { Hide, Show } from '@chakra-ui/react';
import { MyProfileContainerDesktop } from './layouts/MyProfileContainer.desktop';
import { MyProfileContainerMobile } from './layouts/MyProfileContainer.mobile';

export const MyProfileContainer = () => {
  return (
    <>
      <Show above="1024px">
        <MyProfileContainerDesktop />
      </Show>
      <Hide above="1024px">
        <MyProfileContainerMobile />
      </Hide>
    </>
  );
};
