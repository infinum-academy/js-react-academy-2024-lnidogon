'use client';
import { ShowSection } from '../../shows/ShowSection';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { IShow } from '@/typings/show';
import { swrKeys } from '@/fetchers/swrKeys';
import { fetcher } from '@/fetchers/fetcher';

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
  return <ShowSection show={data.show} />;
};
