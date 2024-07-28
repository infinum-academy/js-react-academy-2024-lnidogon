'use client';

import { PlannerContextProvider } from '@/components/features/planner/components/PlannerContextProvider';
import theme from '@/styles/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider theme={theme}>
        <PlannerContextProvider>{children}</PlannerContextProvider>
      </ChakraProvider>
    </SWRConfig>
  );
}
