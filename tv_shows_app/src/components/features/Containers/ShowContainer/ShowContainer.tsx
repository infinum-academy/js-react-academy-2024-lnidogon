'use client';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { ShowSection } from '../../shows/ShowSection';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { getShow } from '@/fetchers/shows';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import useSWRMutation from 'swr/mutation';
import { IShow } from '@/typings/show';
import { mutator, getMutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { fetcher } from '@/fetchers/fetcher';
import { IsFlatObject } from 'react-hook-form';

export const ShowContainer = () => {
  const params = useParams();

  const { data, error, isLoading } = useSWR<{ show: IShow }>(
    swrKeys.show(params.id as string),
    async () =>
      await fetcher<{ show: IShow }>(swrKeys.show(params.id as string))
  );

  if (isLoading || !data) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  console.log(data);
  return <ShowSection show={data.show} />;
};
