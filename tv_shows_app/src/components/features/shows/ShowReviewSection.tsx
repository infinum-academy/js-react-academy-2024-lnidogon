import { Flex, Text } from '@chakra-ui/react';
import { IReview } from '../reviews/ReviewItem/ReviewItem';
import { ReviewForm } from '../reviews/ReviewForm/ReviewForm';
import { ReviewList } from '../reviews/ReviewList/ReviewList';

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: number;
}

export const ShowReviewSection = ({
  reviews,
  showId,
}: IShowReviewSectionProps) => {
  return (
    <Flex flexDirection="row" gap="4" width="80%" maxWidth="1000px">
      <Text
        color={'white'}
        fontWeight={'700'}
        fontFamily={
          "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        }
        fontSize={'md'}
      >
        Reviews
      </Text>
      <Flex flexDirection="column" gap="2" width="100%">
        <ReviewForm showId={showId} />
        <ReviewList reviews={reviews} />
      </Flex>
    </Flex>
  );
};
