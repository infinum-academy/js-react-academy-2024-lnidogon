import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { IReview } from '../reviews/ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';
import { IShow } from '@/typings/show';
import { swrKeys } from '@/fetchers/swrKeys';
import useSWR, { mutate } from 'swr';
import { create } from 'domain';
import { fetcher } from '@/fetchers/fetcher';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowReviewSection } from './ShowReviewSection/ShowReviewSection';
import { ShowDetails } from './ShowDetails/ShowDetails';

interface IShowSection {
  show: IShow;
}

export const ShowSection = ({ show }: IShowSection) => {
  const { data } = useSWR<{ reviews: Array<IReview> }>(
    swrKeys.listReviews(show.id),
    async () =>
      await fetcher<{ reviews: Array<IReview> }>(swrKeys.listReviews(show.id))
  );

  if (!data) return <LoadingScreen />;

  return (
    <Box
      backgroundColor="purple.700"
      height="100%"
      padding="31px"
      overflow="auto"
    >
      <Flex flexDirection="column" alignItems="center" gap="61px">
        <ShowDetails show={show} />
        <ShowReviewSection reviews={data.reviews} showId={show.id} />
      </Flex>
    </Box>
  );
};
