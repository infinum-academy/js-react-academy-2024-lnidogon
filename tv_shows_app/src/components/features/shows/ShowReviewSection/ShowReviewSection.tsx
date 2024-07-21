import { Flex, Hide, Show, Text } from '@chakra-ui/react';
import { IReview } from '../../reviews/ReviewItem/ReviewItem';
import { ShowReviewSectionDesktop } from './layouts/ShowReviewSection.desktop';
import { ShowReviewSectionMobile } from './layouts/ShowReviewSection.mobile';

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: number;
}

export const ShowReviewSection = ({
  reviews,
  showId,
}: IShowReviewSectionProps) => {
  return (
    <>
      <Show above="1024px">
        <ShowReviewSectionDesktop reviews={reviews} showId={showId} />
      </Show>
      <Hide above="1024px">
        <ShowReviewSectionMobile reviews={reviews} showId={showId} />
      </Hide>
    </>
  );
};
