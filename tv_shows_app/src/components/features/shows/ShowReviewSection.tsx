import { Flex, Text } from '@chakra-ui/react';
import { IReview } from '../reviews/ReviewItem/ReviewItem';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from '../reviews/ReviewList';
import next from 'next';

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  onAdd: (comment: string, rating: number, showId: number) => void;
  showId: number;
  onRemove: (reviewId: number) => void;
}

export const ShowReviewSection = ({
  reviews,
  onAdd,
  showId,
  onRemove,
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
        <ReviewForm onAdd={onAdd} showId={showId} />
        <ReviewList reviews={reviews} onRemove={onRemove} />
      </Flex>
    </Flex>
  );
};
