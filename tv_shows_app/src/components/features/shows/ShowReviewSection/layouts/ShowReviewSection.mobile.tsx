import { Flex, Text } from '@chakra-ui/react';
import { IReview } from '../../../reviews/ReviewItem/ReviewItem';
import { ReviewForm } from '../../../reviews/ReviewForm/ReviewForm';
import { ReviewList } from '../../../reviews/ReviewList/ReviewList';

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: number;
}

export const ShowReviewSectionMobile = ({
  reviews,
  showId,
}: IShowReviewSectionProps) => {
  return (
    <Flex flexDirection="column" gap="32px" width="344px">
      <Text color="white" width="175px" textStyle="body">
        Reviews
      </Text>
      <Flex flexDirection="column" gap="0" width="100%">
        <ReviewForm showId={showId} />
        <ReviewList reviews={reviews} />
      </Flex>
    </Flex>
  );
};
