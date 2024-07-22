import { Flex, Text } from '@chakra-ui/react';
import { IReview } from '../../reviews/ReviewItem/ReviewItem';
import { ReviewForm } from '../../reviews/ReviewForm/ReviewForm';
import { ReviewList } from '../../reviews/ReviewList/ReviewList';

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  showId: number;
}

export const ShowReviewSection = ({
  reviews,
  showId,
}: IShowReviewSectionProps) => {
  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: '32px', lg: '26px' }}
      width={{ base: '344px', lg: '1052px' }}
    >
      <Text color="white" width="175px" textStyle="body">
        Reviews
      </Text>
      <Flex flexDirection="column" gap={{ base: '0', lg: '61px' }} width="100%">
        <ReviewForm showId={showId} />
        <ReviewList reviews={reviews} />
      </Flex>
    </Flex>
  );
};
