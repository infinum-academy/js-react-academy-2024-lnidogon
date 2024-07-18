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

export const ShowContainer = () => {
  const params = useParams();
  const { trigger } = useSWRMutation(
    swrKeys.show + `/${params.id}`,
    getMutator
  );
  async function getShow() {
    return await trigger(params);
  }

  const { data, error, isLoading } = useSWR(
    `/api/shows/${params.id}`,
    async () => getShow()
  );

  if (isLoading || !data) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return <ShowSection show={data.show} />;
};
